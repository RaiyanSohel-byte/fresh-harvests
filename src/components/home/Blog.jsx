import React from "react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center space-y-4">
        <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
          Our Blog
        </span>
        <h2 className="text-[32px] max-w-[300px] md:max-w-5xl mx-auto md:text-6xl font-semibold text-gray-900 mb-2 mt-4 rubik-font">
          Fresh Harvest Blog
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>
    </div>
  );
};

export default Blog;
