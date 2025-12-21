import React from "react";
import leaf2 from "../../assets/leaf2.png";
import leaf3 from "../../assets/leaf3.png";
const products = [
  { id: 1, name: "Mushroom", price: "$2.3/kg", image: "/images/mushroom.png" },
  {
    id: 2,
    name: "Mustard",
    price: "$1.3/kg",
    image: "/images/mustard.png",
    active: true,
  },
  { id: 3, name: "Orange", price: "$4.2/kg", image: "/images/orange.png" },
  {
    id: 4,
    name: "Pomegranate",
    price: "$11.2/kg",
    image: "/images/pomegranate.png",
  },
  { id: 5, name: "Kiwi", price: "$5.3/kg", image: "/images/kiwi.png" },
  { id: 6, name: "Coconut", price: "$6.3/kg", image: "/images/coconut.png" },
  { id: 7, name: "Guava", price: "$2.2/kg", image: "/images/guava.png" },
  { id: 8, name: "Eggplant", price: "$1.2/kg", image: "/images/eggplant.png" },
];

const OurProducts = () => {
  return (
    <section className="md:pt-16 overflow-hidden">
      <div className="relative">
        <img
          src={leaf2}
          alt=""
          className="absolute md:left-40 top-34 md:top-14 rotate-45"
        />
      </div>
      <div className="relative">
        <img
          src={leaf3}
          alt=""
          className="absolute right-2 md:right-32 top-4 md:-top-25 -rotate-32"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-42">
        <div className="text-center mb-10">
          <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
            Our Products
          </span>
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 mb-2 mt-4 rubik-font">
            Our Fresh Products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["All", "Fruits", "Vegetables", "Salad"].map((item, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-md border text-sm rubik-font ${
                item === "All"
                  ? "bg-[#749b3f] text-white border-[#749b3f]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm p-4 text-center"
            >
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-36 object-contain mx-auto"
                />
              </div>

              <h3 className="font-semibold text-gray-800 rubik-font">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{product.price}</p>

              <button className="w-full py-2 rounded-md text-md border transition rubik-font border-gray-300 hover:bg-[#FF6A1A] hover:text-white cursor-pointer">
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-[#FF6A1A] text-[#FF6A1A] rounded-md hover:bg-[#FF6A1A] hover:text-white transition cursor-pointer font-semibold">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
