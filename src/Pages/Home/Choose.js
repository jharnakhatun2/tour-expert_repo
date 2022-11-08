import React from "react";
import img1 from "../../Assets/destination/1.jpg";
import img2 from "../../Assets/destination/2.png";
import img3 from "../../Assets/destination/3.jpg";
import img4 from "../../Assets/destination/4.jpg";
import img5 from "../../Assets/destination/5.jpg";
import img6 from "../../Assets/destination/6.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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
          <PhotoProvider>
            <PhotoView src={img1}>
              <figure>
                <img className="w-full cursor-pointer" src={img1} alt="Shoes" />
              </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <h2 className="card-title mx-auto p-2 text-inherit">Radiant Fish World</h2>
          <PhotoProvider>
            <PhotoView src={img2}>
            <figure>
            <img className="w-full cursor-pointer" src={img2} alt="Shoes" />
          </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <h2 className="card-title mx-auto p-2 text-inherit">
            Mermaid Beach Resort
          </h2>
          <PhotoProvider>
            <PhotoView src={img3}>
            <figure>
            <img className="w-full cursor-pointer" src={img3} alt="Shoes" />
          </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <h2 className="card-title mx-auto p-2 text-inherit">
            100 Feet Buddha
          </h2>
          <PhotoProvider>
            <PhotoView src={img4}>
            <figure>
            <img className="w-full cursor-pointer" src={img4} alt="Shoes" />
          </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <h2 className="card-title mx-auto p-2 text-inherit">
            Sonadia Island
          </h2>
          <PhotoProvider>
            <PhotoView src={img5}>
            <figure>
            <img className="w-full cursor-pointer" src={img5} alt="Shoes" />
          </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <h2 className="card-title mx-auto p-2 text-inherit">Laboni Beach</h2>
          <PhotoProvider>
            <PhotoView src={img6}>
            <figure>
            <img className="w-full cursor-pointer" src={img6} alt="Shoes" />
          </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default Choose;
