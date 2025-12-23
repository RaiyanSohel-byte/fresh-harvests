import React, { useState } from "react";
import leaf2 from "../../assets/leaf2.png";
import leaf3 from "../../assets/leaf3.png";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router";

const OurProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // category get
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await useAxios.get("/category");
      return res.data.data;
    },
  });

  //products get
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await useAxios.get("/products");
      return res.data.data;
    },
  });

  //products filter
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.categoryId === activeCategory);

  return (
    <section className="lg:pt-16 overflow-hidden">
      <div className="relative">
        <img
          src={leaf2}
          alt=""
          className="absolute lg:left-40 top-34 lg:top-14 rotate-45"
        />
      </div>
      <div className="relative">
        <img
          src={leaf3}
          alt=""
          className="absolute right-2 lg:right-32 top-4 lg:-top-25 -rotate-32"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-42">
        <div className="text-center mb-10">
          <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
            Our Products
          </span>
          <h2 className="text-[32px] max-w-[350px] lg:max-w-5xl mx-auto lg:text-5xl font-semibold text-gray-900 mb-2 mt-4">
            Our Fresh Products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        {/* category filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-md border text-sm rubik-font ${
              activeCategory === "All"
                ? "bg-[#749b3f] text-white border-[#749b3f]"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md border text-sm rubik-font ${
                activeCategory === category.id
                  ? "bg-[#749b3f] text-white border-[#749b3f]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category.categoryName}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg font-medium py-12">
            No products found in this category
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}

        <div className="text-center mt-12 relative">
          <Link to="/shop">
            <button className="px-8 py-3 border border-[#FF6A1A] text-[#FF6A1A] rounded-md hover:bg-[#FF6A1A] hover:text-white transition cursor-pointer font-semibold">
              See All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
