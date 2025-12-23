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
      className="relative overflow-x-hidden lg:overflow-visible bg-gray-100  pt-32 lg:pt-48 min-h-240"
    >
      <div
        id="hero-sentinel"
        className="absolute right-0 top-0 w-20 lg:w-[10%] lg:w-[26.56%] h-full bg-[#749B3F] z-0"
      >
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
      <img src={leaf1} alt="leaf" className="absolute top-30 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <img
            src={leaf2}
            alt="leaf2"
            className="absolute left-24 lg:left-180 top-5"
          />
        </div>
        <div className="leading-tight max-w-165 px-3.5 lg:px-0 relative z-10">
          <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
            Welcome to Fresh Harvest
          </span>
          <h1 className="font-medium text-[48px] lg:text-7xl mb-4 mt-5">
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
              className="hidden lg:block absolute left-24 mt-2"
            />
          </div>

          <div className="relative">
            <div className="bg-[#EBEBEB] flex justify-between items-center absolute px-4 py-4 mt-8 ml-4 lg:mt-0 lg:ml-0 lg:left-44 lg:top-4 rounded-xl">
              <div className="space-y-0.75">
                <p className="text-[#176D38] font-medium text-[8px] lg:text-sm">
                  Special Offer
                </p>
                <h3 className="text-md lg:text-[28px] font-medium text-[#212337]">
                  Fresh Salad
                </h3>

                <div className="flex items-center gap-1">
                  <p className="text-[10px] lg:text-[16px] font-medium text-[#176D38]">
                    Up to
                  </p>
                  <img
                    src={specialOfferImg}
                    alt=""
                    className="w-10 lg:w-[72px]"
                  />
                </div>

                <h3 className="badge rounded-full badge-xs lg:badge-md text-[6px] lg:text-xs font-semibold text-white bg-[#176D38]">
                  CODE : <span className="text-[#FAC714]">FRESH25</span>
                </h3>
              </div>

              <div>
                {" "}
                <img src={saladImg} alt="Salad" className="w-20 h-20" />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block top-48 -left-10">
            <img src={leaf2} alt="leaf2" className="absolute" />
          </div>
          <div className="z-20 relative">
            <div className="absolute top-70 lg:top-50">
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

        <div className="absolute z-10 bottom-1 lg:top-28 -right-32 lg:right-0">
          <img
            src={heroImg}
            alt="hero image"
            className="max-w-sm lg:max-w-2xl w-full mx-auto lg:h-212"
          />
          <img
            src={heroVector}
            alt=""
            className="absolute bottom-60 right-82 lg:bottom-109 lg:right-148"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
