import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial from "../../assets/Testimonial.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import testimonialVector from "../../assets/testimonialVector.png";
import testimonialLeaf1 from "../../assets/testimonialLeaf1.png";
import testimonialLeaf2 from "../../assets/testimonialLeaf2.png";

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 lg:pt-0">
      <div className="text-center">
        <div className="relative">
          <img
            src={testimonialLeaf1}
            alt="leaf1"
            className="absolute top-5 lg:top-20 right-72 lg:left-30"
          />
          <img
            src={testimonialLeaf2}
            alt="leaf2"
            className="absolute right-0 lg:right-25 bottom-3 lg:top-30"
          />
        </div>
        <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
          Testimonial
        </span>
        <h2 className="text-[32px] max-w-[300px] md:max-w-5xl mx-auto md:text-6xl font-semibold text-gray-900 mb-2 mt-4 rubik-font">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Don't just take our word for it—here's what some of our customers have
          to say about their experience with Fresh Harvest:
        </p>
      </div>
      {/* swiper */}
      <div className="max-w-5xl mx-auto pt-8 pb-20">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="md:flex items-center gap-[83px] relative py-8 lg:py-12">
              <img
                src={testimonialVector}
                alt="vector"
                className="absolute left-64 lg:left-62 bottom-[93%] lg:bottom-[85%] z-50"
              />
              <img
                src={testimonial}
                alt="testimonial"
                className="mx-auto mb-6 md:mb-0"
              />
              <div className="bg-[#F4F6F6] p-8 rounded-3xl">
                <p className="text-[#4A4A52] questrial text-[14px] md:text-[20px] mb-8 max-w-[579px]">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs.
                </p>
                <p className="text-[#4A4A52] questrial text-[14px] md:text-[20px] font-normal">
                  <span className="font-bold">Jane Doe -</span> Professional
                  chef
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:flex items-center gap-[83px] relative py-14 lg:py-22">
              <img
                src={testimonialVector}
                alt="vector"
                className="absolute left-64 lg:left-62 bottom-[93%] lg:bottom-[85%] z-50"
              />
              <img
                src={testimonial}
                alt="testimonial"
                className="mx-auto mb-6 md:mb-0"
              />
              <div className="bg-[#F4F6F6] p-8 rounded-3xl">
                <p className="text-[#4A4A52] questrial text-[14px] md:text-[20px] mb-8 max-w-[579px]">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs.
                </p>
                <p className="text-[#4A4A52] questrial text-[14px] md:text-[20px] font-normal">
                  <span className="font-bold">Jane Doe -</span> Professional
                  chef
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:flex items-center gap-[83px] relative py-8 lg:py-12">
              <img
                src={testimonialVector}
                alt="vector"
                className="absolute left-64 lg:left-62 bottom-[93%] lg:bottom-[85%] z-50"
              />
              <img
                src={testimonial}
                alt="testimonial"
                className="mx-auto mb-6 md:mb-0"
              />
              <div className="bg-[#F4F6F6] p-8 rounded-3xl">
                <p className="text-[#4A4A52] questrial text-[14px] md:text-[20px] mb-8 max-w-[579px]">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs.
                </p>
                <p className="text-[#4A4A52] questrial text-[14px] md:text-[20px] font-normal">
                  <span className="font-bold">Jane Doe -</span> Professional
                  chef
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
