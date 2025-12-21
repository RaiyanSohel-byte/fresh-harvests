import React from "react";
import heroImg from "../../assets/hero.png";
const Hero = () => {
  return (
    <section className="md:flex justify-between items-start max-w-7xl mx-auto">
      <div className="leading-tight max-w-165">
        <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
          Welcome to Fresh Harvest
        </span>
        <h1 className="font-medium text-5xl md:text-7xl mb-4 mt-5">
          Fresh Fruits and Vegetables
        </h1>
        <p className="text-sm text-[#4A4A52] max-w-md mb-8">
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables
        </p>
        <button className="font-semibold text-md text-white py-3 px-6 bg-[#FF6A1A] rounded-lg cursor-pointer">
          Shop Now
        </button>
      </div>
      <div>
        <img src={heroImg} alt="hero image" className="max-w-md mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
