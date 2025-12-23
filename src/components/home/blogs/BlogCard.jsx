import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const BlogCard = ({ blog }) => {
  return (
    <div className="text-lg">
      <img src={blog.image} alt={blog.title} className="mb-6" />
      <p className="text-[#4A4A52] mb-2">{blog.date}</p>
      <h3 className="font-medium text-[#212337] mb-4">{blog.title}</h3>
      <Link
        to="/blog"
        className="text-[#FF6A1A] font-semibold flex items-center gap-3 hover:underline"
      >
        Read More <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default BlogCard;
