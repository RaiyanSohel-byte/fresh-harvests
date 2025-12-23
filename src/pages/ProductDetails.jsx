import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import ProductCard from "../components/ProductCard/ProductCard";
import cartImg from "../assets/Shopping cart.png";
import favImg from "../assets/Save Button Icon.png";

const ProductDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await useAxios.get(`/products/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });

  const { data: allProducts = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await useAxios.get("/products");
      return res.data.data;
    },
    enabled: !!product,
  });

  if (isLoading)
    return (
      <div className="py-24 text-center text-gray-500">Loading product...</div>
    );

  if (isError || !product)
    return (
      <div className="py-24 text-center text-red-500">
        Failed to load product
      </div>
    );

  const {
    productName,
    description,
    price,
    stock,
    images = [],
    categoryId,
  } = product;

  const relatedProducts = allProducts.filter(
    (p) => p.categoryId === categoryId && p.id !== id
  );

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <div className="bg-[#F8F8F8] rounded-2xl p-10 shadow-sm">
            <img
              src={images[activeImage]}
              alt={productName}
              className="w-full h-[300px] lg:h-[420px] object-contain mx-auto"
            />
          </div>

          {images.length > 1 && (
            <div className="flex justify-center gap-4 mt-6">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 border rounded-xl flex items-center justify-center ${
                    activeImage === index
                      ? "border-[#749B3F]"
                      : "border-gray-200"
                  }`}
                >
                  <img src={img} className="w-14 h-14 object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
            {product.category.categoryName}
          </span>

          <h1 className="text-3xl lg:text-4xl font-semibold my-4">
            {productName}
          </h1>

          <div className="flex items-center gap-1 text-[#FFB800] mb-4">
            ★ ★ ★ ★ ★ <span className="text-gray-400 ml-2">(5.0 review)</span>
          </div>

          <p className="text-[#FF6A1A] text-3xl font-semibold mb-6">
            ${price}/kg
          </p>

          <p className="text-gray-500 leading-relaxed mb-8">{description}</p>
          <div className="flex items-center gap-6 my-4">
            <span className="text-gray-700 font-semibold rubik-font">
              Quantity
            </span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <span className="px-4 py-2">-</span>
              <span className="px-6 py-2 border-x border-gray-300 font-bold rubik-font">
                1
              </span>
              <span className="px-4 py-2">+</span>
            </div>
            <span className="text-gray-500">/kg</span>
          </div>
          <div className="lg:flex flex-wrap gap-4 space-y-5 lg:space-y-0">
            <button className="bg-gray-100 py-4 gap-2 w-full lg:w-[280px] rounded-lg font-medium flex items-center justify-center">
              <img src={favImg} alt="" className="w-6" /> Save as favorite
            </button>
            <button
              disabled={stock === 0}
              className="bg-[#FF6A1A] text-white flex items-center justify-center py-4 rounded-lg font-semibold hover:bg-[#e55c15] transition gap-2 lg:w-[280px] disabled:opacity-50 w-full"
            >
              <img src={cartImg} alt="" className="w-6" /> Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 cursor-pointer rounded-lg text-lg text-[#A6A6A6] ${
              activeTab === "description"
                ? "bg-[#749B3F] text-white"
                : "bg-white text-gray-600 border border-gray-300"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-3 cursor-pointer rounded-lg text-lg text-[#A6A6A6] ${
              activeTab === "reviews"
                ? "bg-[#749B3F] text-white"
                : "bg-white text-gray-600 border border-gray-300"
            }`}
          >
            Reviews (1)
          </button>
        </div>

        <div className="bg-[#F4F6F6] p-8 rounded-xl">
          {activeTab === "description" && (
            <p className="text-gray-600 text-md questrial leading-relaxed">
              {description}
            </p>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-700 font-medium">Great Vegies</div>
          )}
        </div>
      </div>

      <div className="text-center mb-10 mt-30">
        <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
          Related Products
        </span>
        <h2 className="text-[32px] max-w-[350px] lg:max-w-5xl mx-auto lg:text-5xl font-semibold text-gray-900 mb-2 mt-4">
          Related Products
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>

        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No related products found</p>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
