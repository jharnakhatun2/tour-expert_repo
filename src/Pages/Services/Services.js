import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData} from "react-router-dom";

const Services = () => { 
  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/services`)
    .then(res => res.json())
    .then(data=> setServices(data))
  },[]);

  return (
    <div className="px-10 py-20">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold text-zinc-800">SERVICES</h1>
        <hr className="w-8 h-1 bg-orange-400 mx-auto" />
      </div>

      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center p-10">
          {
            services.map(service=>{
              const {_id,image,name,price,short_des} =service;
              return <div className="card card-compact w-80 bg-base-100 shadow-xl" key={_id}>
          <PhotoProvider>
            <PhotoView src={image}>
              <figure>
                <img className="cursor-pointer" src={image} alt="Shoes" />
              </figure>
            </PhotoView>
          </PhotoProvider>

          <div className="card-body">
            <h2 className="card-title text-slate-200">{name}</h2>
            <p>{short_des.length < 100 ? short_des : short_des.slice(0, 100)+ "..."}</p>
            <div className="card-actions justify-between items-center">
              <h2 className="text-orange-600 text-2xl font-bold">${price}</h2>
              <Link to={`/singleservice/${_id}`}>
              <button className="btn bg-cyan-400 hover:bg-orange-400 text-white border-0">
                VIEW DETAILS
              </button>
              </Link>
            </div>
          </div>
        </div>
            })
           }
               
      </div>

      <div className="text-center">
      <Link to="/service">
        <button className="btn bg-orange-500 hover:bg-cyan-400 text-white border-0">
          SEE ALL SERVICES
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
