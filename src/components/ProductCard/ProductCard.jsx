import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-xl shadow-sm p-4 text-center"
    >
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <Link to={`/productDetails/${product.id}`}>
          {" "}
          <img
            src={product.images?.[0]}
            alt={product.productName}
            className="w-full h-36 object-contain mx-auto"
          />
        </Link>
      </div>

      <h3 className="font-semibold text-gray-800 rubik-font">
        {product.productName}
      </h3>
      <p className="text-gray-500 text-sm mb-4">${product.price}/kg</p>

      <button className="w-full py-2 rounded-md text-md border transition rubik-font border-gray-300 hover:bg-[#FF6A1A] hover:text-white cursor-pointer">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
