import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';

const Blogs = () => {
    const blogs = useLoaderData();
    useTitle('Blogs');
    return (
        <div className="px-10 py-20 blog_image mx-auto">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold text-zinc-800">TOUR EXPERT BLOG</h1>
        <hr className="w-8 h-1 bg-orange-400 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center p-10 mx-auto">
        {blogs.map((blog) => {
          const { _id, image, title,desc} = blog;
          return (
            <div
              className="card card-compact  bg-base-100 shadow-xl"
              key={_id}
            >
              <PhotoProvider>
                <PhotoView src={image}>
                  <figure>
                    <img className="cursor-pointer w-full" src={image} alt="Shoes" />
                  </figure>
                </PhotoView>
              </PhotoProvider>

              <div className="card-body">
                <h2 className="card-title text-slate-200">{title}</h2>
                <p>{desc.length < 200 ? desc : desc.slice(0, 200)+ "..."}</p>
                <div className="card-actions justify-between items-center">
                  
                  <Link to={`/blog/${_id}`}>
                    <button className="btn bg-cyan-400 hover:bg-orange-400 text-white border-0">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    );
};

export default Blogs;