import React from "react";
import blogImg1 from "../../../assets/blogImg1.png";
import blogImg2 from "../../../assets/blogImg2.png";
import blogImg3 from "../../../assets/blogImg3.png";
import BlogCard from "./BlogCard";
import leafImg from "../../../assets/testimonialLeaf2.png";
const Blog = () => {
  const blogs = [
    {
      image: blogImg1,
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      date: "May 23, 2024",
    },
    {
      image: blogImg2,
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      date: "May 23, 2024",
    },
    {
      image: blogImg3,
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      date: "May 23, 2024",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 space-y-10">
      <div className="text-center space-y-4 relative">
        <img
          src={leafImg}
          alt="leaf"
          className="absolute right-40 top-7 hidden lg:block"
        />
        <span className="py-1 px-3 bg-[#749B3F1A] text-[#749B3F] text-xl font-medium rounded-lg">
          Our Blog
        </span>
        <h2 className="text-[32px] max-w-[300px] lg:max-w-5xl mx-auto lg:text-6xl font-semibold text-gray-900 mb-2 mt-4 rubik-font">
          Fresh Harvest Blog
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
