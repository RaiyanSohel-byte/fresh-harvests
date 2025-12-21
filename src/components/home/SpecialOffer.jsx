import React from "react";
import dealBg from "../../assets/dealBg.png";
import dealBg2 from "../../assets/dealBg2.png";
const SpecialOffer = () => {
  return (
    <section className="mt-16 md:mt-[150px] ">
      <img src={dealBg} alt="" className="w-full mx-auto hidden md:block" />
      <img src={dealBg2} alt="" className="w-full mx-auto md:hidden" />
    </section>
  );
};

export default SpecialOffer;
