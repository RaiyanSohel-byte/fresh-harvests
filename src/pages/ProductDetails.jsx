import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import ProductCard from "../components/ProductCard/ProductCard";

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
          <span className="inline-block text-xs font-semibold text-[#749B3F] bg-[#749B3F1A] px-4 py-1 rounded-full mb-4">
            Fruits
          </span>

          <h1 className="text-3xl lg:text-4xl font-semibold mb-2">
            {productName}
          </h1>

          <div className="flex items-center gap-1 text-[#FFB800] mb-4">
            ★ ★ ★ ★ ★ <span className="text-gray-400 ml-2">(5.0 review)</span>
          </div>

          <p className="text-[#FF6A1A] text-3xl font-semibold mb-6">
            ${price}/kg
          </p>

          <p className="text-gray-500 leading-relaxed mb-8">{description}</p>

          <div className="flex flex-wrap gap-4">
            <button
              disabled={stock === 0}
              className="bg-[#FF6A1A] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#e55c15] transition disabled:opacity-50"
            >
              Add to cart
            </button>

            <button className="bg-gray-100 px-8 py-3 rounded-lg font-medium">
              Save as favorite
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 rounded-lg text-lg font-medium ${
              activeTab === "description"
                ? "bg-[#749B3F] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-3 rounded-lg text-lg font-medium ${
              activeTab === "reviews"
                ? "bg-[#749B3F] text-white"
                : "bg-gray-100 text-gray-600"
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

      <div className="mt-24 text-center">
        <span className="inline-block mb-3 text-xs font-semibold text-[#749B3F] bg-[#749B3F1A] px-4 py-1 rounded-full">
          Our Products
        </span>

        <h2 className="text-3xl font-semibold mb-12">Related products</h2>

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
