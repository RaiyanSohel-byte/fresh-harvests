import React from "react";
import Hero from "../components/home/Hero";
import OurProducts from "../components/home/OurProducts";
import About from "../components/home/About";
import SpecialOffer from "../components/home/SpecialOffer";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurProducts />
      <About />
      <SpecialOffer />
    </div>
  );
};

export default Home;
