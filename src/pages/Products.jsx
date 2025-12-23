import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import ProductCard from "../components/ProductCard/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await useAxios.get("/category");
      return res.data.data;
    },
  });

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await useAxios.get("/products");
      return res.data.data;
    },
  });

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.categoryId === activeCategory);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-42 text-center py-20 text-gray-500">
        Loading products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-42 text-center py-20 text-red-500">
        Failed to load products
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-42">
      <div className="text-center mb-10">
        <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
          Product Shop
        </span>
        <h2 className="text-[32px] max-w-[350px] lg:max-w-5xl mx-auto lg:text-5xl font-semibold text-gray-900 mb-2 mt-4">
          Shop Products
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
