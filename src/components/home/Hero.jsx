import React from "react";
import heroImg from "../../assets/hero.png";
import heroVector from "../../assets/heroVector.png";
import arrowImg from "../../assets/arrow.png";
import specialOfferImg from "../../assets/specialOffer.png";
import saladImg from "../../assets/salad.png";
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

          <div className="relative">
            {" "}
            <img
              src={arrowImg}
              alt="arrow"
              className="hidden md:block absolute left-24 mt-2"
            />
          </div>

          {/* offer */}
          <div className="relative">
            <div className="bg-[#EBEBEB] flex justify-between items-center absolute px-3 py-4 mt-8 ml-4 md:mt-0 md:ml-0 md:left-44 md:top-4 rounded-xl">
              <div className="space-y-0.75">
                <p className="text-[#176D38] font-medium text-[8px] md:text-sm">
                  Special Offer
                </p>
                <h3 className="text-md md:text-[28px] font-medium text-[#212337]">
                  Fresh Salad
                </h3>
                {/* special offer */}
                <div className="flex items-center gap-1">
                  <p className="text-[10px] md:text-[16px] font-medium text-[#176D38]">
                    Up to
                  </p>
                  <img
                    src={specialOfferImg}
                    alt=""
                    className="w-10 md:w-[72px]"
                  />
                </div>
                {/* badge */}
                <h3 className="badge rounded-full badge-xs md:badge-md text-[6px] md:text-xs font-semibold text-white bg-[#176D38]">
                  CODE : <span className="text-[#FAC714]">FRESH25</span>
                </h3>
              </div>

              <div>
                {" "}
                <img src={saladImg} alt="Salad" className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 bottom-1 lg:top-28 -right-32 md:right-0">
          <img
            src={heroImg}
            alt="hero image"
            className="max-w-sm lg:max-w-2xl w-full mx-auto md:h-212"
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
