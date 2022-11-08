import React from "react";
import img1 from "../../Assets/slider/1.png";
import img2 from "../../Assets/slider/2.png";
import img3 from "../../Assets/slider/3.png";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img1,
    prev: 3,
    id: 1,
    text: "Winter Vacation",
    detail:"Cox's Bazar vacation packages on Tripadvisor make planning your trip simple and affordable.",
    next: 2
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    text: "Exciting Places",
    detail:"Amazing hospitality, fresh seafood, marine drive, kutubdia, Moheshkhali Island, and amazing St. Martin's Island.",
    next: 3
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    text: "Midnight Rides",
    detail:"Long Journey at Midnight. Enjoy the car drive on a Long Route. It was our journey to the Cox's Bazar.",
    next: 1
  }
];
const Banner = () => {
  return (
    <div>
      <div className="carousel">
        {
          bannerData.map(slide =><BannerItem key={slide.id} slide = {slide}></BannerItem>)
        }
      </div>
    </div>
  );
};

export default Banner;
