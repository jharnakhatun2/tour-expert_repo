import React from "react";
import img from "../../Assets/slider/4.png";

const Destination = () => {
  return (
    <div>
      <div class="container mx-auto px-10 bg-white p-10">
        <div class="grid grid-rows grid-flow-col gap-4">
          <div class="grid grid-cols lg:grid-cols-3 gap-4">
            <div class="p-10">
              <h2 className="text-2xl text-zinc-900 ">WHY CHOOSE TOUR EXPERT</h2>
              <p className="text-lg text-zinc-600 mt-2">
                Book cheap hotels and make payment facilities.
              </p>
              <hr className="w-8 h-1 bg-orange-400 my-5" />
              <p className="text-lg text-zinc-600">
                Find a wide variety of airline tickets and cheap flights,
                hotels, tour packages, car rentals, cruises and more in
                travelexpert.com. You can choose your favorite destination and start
                planning your long-awaited vacation. You can also check
                availability of flights.
              </p>
            </div>
            <div className="col-span-2 p-10">
            <img className="rounded shadow-xl" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
