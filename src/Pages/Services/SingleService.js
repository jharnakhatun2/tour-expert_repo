import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleService = () => {
  const { _id, image, name, price, short_des, des } = useLoaderData();
  return (
    <div className="bg-zinc-100">
      <div>
        <img className=" w-full mx-auto h-auto" src={image} alt="" />
      </div>
      <div className="p-20">
        <div className="p-10 flex items-center">
          <h1 className="text-3xl font-bold text-zinc-900 uppercase">{name}</h1>
          <h1 className=" p-2 ml-9 bg-cyan-200 text-xl text-orange-600 font-bold">
            ${price} / Per Person
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center p-10">
          <div>
            <div className="pb-4">{short_des}</div>
            <div className="text-justify">
              <span className="text-xl font-bold text-cyan-600 uppercase ">
                Details :
              </span>
              <br /> {des}
            </div>
          </div>
          <div>
            <div>
              <span className="text-xl font-bold text-cyan-600 uppercase">
                User Review about This Services :
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
