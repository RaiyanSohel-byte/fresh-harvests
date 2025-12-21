import React from "react";
import heroImg from "../../assets/hero.png";
import heroVector from "../../assets/heroVector.png";
import arrowImg from "../../assets/arrow.png";
import specialOfferImg from "../../assets/specialOffer.png";
import saladImg from "../../assets/salad.png";
import appStore from "../../assets/appStore.png";
import playStore from "../../assets/playStore.png";
import leaf1 from "../../assets/leaf1.png";
import leaf2 from "../../assets/leaf2.png";
import mask from "../../assets/mask.png";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-x-hidden md:overflow-visible bg-gray-100  pt-32 lg:pt-48 min-h-240"
    >
      <div
        id="hero-sentinel"
        className="absolute right-0 top-0 w-20 md:w-[10%] lg:w-[26.56%] h-full bg-[#749B3F] z-0"
      >
        {/* Pattern Overlay */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${mask})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <img src={leaf1} alt="leaf" className="absolute hidden md:block" />

      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <img
            src={leaf2}
            alt="leaf2"
            className="absolute left-24 md:left-180 top-5"
          />
        </div>
        <div className="leading-tight max-w-165 px-3.5 lg:px-0 relative z-10">
          <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
            Welcome to Fresh Harvest
          </span>
          <h1 className="font-medium text-[48px] md:text-7xl mb-4 mt-5">
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
            <div className="bg-[#EBEBEB] flex justify-between items-center absolute px-4 py-4 mt-8 ml-4 md:mt-0 md:ml-0 md:left-44 md:top-4 rounded-xl">
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
          {/* download */}
          <div className="relative hidden md:block top-48 -left-10">
            <img src={leaf2} alt="leaf2" className="absolute" />
          </div>
          <div className="z-20 relative">
            <div className="absolute top-70 md:top-50">
              <h3 className="font-normal text-sm text-[#4A4A52] mb-2 questrial">
                Download App
              </h3>

              <div className="flex gap-2">
                <img src={appStore} alt="appStore" />
                <img src={playStore} alt="playStore" />
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
