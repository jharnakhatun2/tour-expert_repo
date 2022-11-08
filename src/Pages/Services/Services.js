import React from "react";

const Services = () => {
  return (
    <div className="px-10 py-20">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold text-zinc-800">SERVICES</h1>
        <hr className="w-8 h-1 bg-orange-400 mx-auto" />
      </div>

      <div className="grid grid-cols lg:grid-cols-3 gap-5 justify-items-center p-10">
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-slate-200">Travel Arrangements</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between items-center">
                <h2 className="text-orange-600 text-2xl font-bold">$65.00</h2>
                <button className="btn bg-cyan-400 hover:bg-orange-400 text-white border-0">VIEW DETAILS</button>
              </div>
            </div>
          </div>
          {/* single card */}
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          {/* single card */}
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

      <div className="text-center">
      <button className="btn bg-orange-500 hover:bg-cyan-400 text-white border-0">SEE ALL</button>
      </div>
    </div>
  );
};

export default Services;
