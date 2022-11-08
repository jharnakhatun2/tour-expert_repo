import React from "react";
import img1 from '../../Assets/destination/1.jpg';
import img2 from '../../Assets/destination/2.png';
import img3 from '../../Assets/destination/3.jpg';
import img4 from '../../Assets/destination/4.jpg';
import img5 from '../../Assets/destination/5.jpg';
import img6 from '../../Assets/destination/6.jpg';

const Choose = () => {
  return (
    <div className="px-10 py-20">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold text-zinc-800">
          POPULAR DESTINATION
        </h1>
        <hr className="w-8 h-1 bg-orange-400 mx-auto" />
      </div>

      <div className="grid grid-cols lg:grid-cols-3 gap-5 justify-items-center p-10">
        <div className="card  bg-base-100 shadow-xl">
            <h2 className="card-title mx-auto p-2 text-inherit">Himchori</h2>
          <figure>
            <img className="w-full" src={img1} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
            <h2 className="card-title mx-auto p-2 text-inherit">Radiant Fish World</h2>
          <figure>
            <img className="w-full" src={img2} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
            <h2 className="card-title mx-auto p-2 text-inherit">Mermaid Beach Resort</h2>
          <figure>
            <img className="w-full" src={img3} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
            <h2 className="card-title mx-auto p-2 text-inherit">100 Feet Buddha</h2>
          <figure>
            <img className="w-full" src={img4} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
            <h2 className="card-title mx-auto p-2 text-inherit">Sonadia Island</h2>
          <figure>
            <img className="w-full" src={img5} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
            <h2 className="card-title mx-auto p-2 text-inherit">Laboni Beach</h2>
          <figure>
            <img className="w-full" src={img6} alt="Shoes" />
          </figure>
        </div>
      
        
        </div>
    </div>
  );
};

export default Choose;
