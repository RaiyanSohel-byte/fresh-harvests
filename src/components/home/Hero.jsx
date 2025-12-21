import React from "react";
import heroImg from "../../assets/hero.png";
import heroVector from "../../assets/heroVector.png";
import arrowImg from "../../assets/arrow.png";
const Hero = () => {
  return (
    <section className="relative overflow-x-hidden md:overflow-visible bg-gray-100  pt-32 lg:pt-48 min-h-240">
      <div className="max-w-7xl mx-auto">
        <div className="leading-tight max-w-165 px-3.5 lg:px-0">
          <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
            Welcome to Fresh Harvest
          </span>
          <h1 className="font-medium text-[50px] md:text-7xl mb-4 mt-5">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-sm text-[#4A4A52] max-w-md mb-8">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          <button className="font-semibold text-md text-white py-3 px-6 bg-[#FF6A1A] rounded-lg cursor-pointer">
            Shop Now
          </button>

          <img src={arrowImg} alt="arrow" className="absolute left-54" />
        </div>
        <div className="absolute z-10  lg:top-28 -right-16 md:right-0">
          <img
            src={heroImg}
            alt="hero image"
            className="max-w-sm lg:max-w-2xl w-full mx-auto md:h-216"
          />
          <img
            src={heroVector}
            alt=""
            className="absolute bottom-60 right-82 md:bottom-109 md:right-148"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
