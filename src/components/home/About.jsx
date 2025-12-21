import React from "react";
import aboutImg from "../../assets/aboutImage.png";
const About = () => {
  return (
    <div className="md:flex items-center justify-between max-w-7xl mx-auto">
      <img
        src={aboutImg}
        alt="about"
        className="mt-16 mb-6 md:mb-0 md:-mt-14"
      />
      <div className="mx-auto px-4 md:px-0">
        <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
          About us
        </span>
        <h3 className="font-medium text-[32px] md:text-[48px] mt-4">
          About Fresh Harvest
        </h3>
        <p className="max-w-[461px] font-normal text-sm text-[#4A4A52]">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <div className="mt-4">
          <button className="px-8 py-3 border border-[#FF6A1A] text-[#FF6A1A] rounded-md hover:bg-[#FF6A1A] hover:text-white transition cursor-pointer font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
