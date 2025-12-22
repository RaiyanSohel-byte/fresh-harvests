import React from "react";
import Hero from "../components/home/Hero";
import OurProducts from "../components/home/OurProducts";
import About from "../components/home/About";
import SpecialOffer from "../components/home/SpecialOffer";
import Testimonial from "../components/home/Testimonial";
import Blog from "../components/home/blogs/Blog";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurProducts />

      <div className="space-y-16 lg:space-y-36">
        <About />
        <SpecialOffer />
        <Testimonial />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
