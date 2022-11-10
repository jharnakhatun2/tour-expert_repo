import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const {title,image,desc} = useLoaderData();

    
    return (
        <div className="px-10 py-20 bg_image mx-auto">
            <div>
                <img className="mx-auto mb-5" src={image} alt=""/>
            </div>
            <div className="text-white text-2xl my-2 w-full text-center">{title}</div>
            <div className="text-zinc-900 w-9/12 mx-auto text-justify text-md">{desc}</div>
        </div>
    );
};

export default Blog;