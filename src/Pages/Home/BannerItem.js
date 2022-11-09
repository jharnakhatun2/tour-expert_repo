import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const BannerItem = ({slide}) => {
    const {detail,text,image,id,prev,next} = slide;
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={image} className="w-full h-auto rounded-lg" alt="" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
            <h1 className="text-6xl font-bold text-white">
              {text}
            </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
            <p className="text-white text-xl">
              {detail}
            </p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/3 ">
          <Link to="/service">
            <button className="btn  bg-orange-600 hover:bg-cyan-600 mr-5 text-white w-full">MORE EXCITING </button></Link>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">
              ❮
            </a>
            <a href={`#slide${next}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
    );
};

export default BannerItem;