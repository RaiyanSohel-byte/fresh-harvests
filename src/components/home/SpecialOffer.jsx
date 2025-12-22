import React from "react";
import dealBg from "../../assets/dealBg.png";
import dealBg2 from "../../assets/dealBg2.png";
const SpecialOffer = () => {
  return (
    <section className="">
      <img src={dealBg} alt="" className="w-full mx-auto hidden lg:block" />
      <img src={dealBg2} alt="" className="w-full mx-auto lg:hidden" />
    </section>
  );
};

export default SpecialOffer;
