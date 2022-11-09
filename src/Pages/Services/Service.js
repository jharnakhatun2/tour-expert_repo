import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";

const Service = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="px-10 py-20 bg_image mx-auto">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold text-zinc-800">SERVICES</h1>
        <hr className="w-8 h-1 bg-orange-400 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center p-10 mx-auto">
        {services.map((service) => {
          const { _id, image, name, price, short_des } = service;
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
                <h2 className="card-title text-slate-200">{name}</h2>
                <p>{short_des}</p>
                <div className="card-actions justify-between items-center">
                  <h2 className="text-orange-600 text-2xl font-bold">
                    ${price}
                  </h2>
                  <Link to={`/singleservice/${_id}`}>
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

export default Service;
