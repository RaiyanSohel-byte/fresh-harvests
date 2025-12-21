import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className={`text-[#4A4A52]`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className={`text-[#4A4A52]`}>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={`text-[#4A4A52]`}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className={`text-[#4A4A52]`}>
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed w-full top-0 z-50 ">
      <div className="navbar relative py-7 max-w-7xl mx-auto px-4 md:px-0">
        <div className="navbar-start">
          <Link to="/">
            <img src={logo} alt="" className="w-56" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">{links}</ul>
        </div>
        <div className="navbar-end gap-4.75 text-sm">
          <NavLink
            to="/favorites"
            className={`hidden md:flex items-center gap-1`}
          >
            <FaHeart size={18} /> Favorites
          </NavLink>
          <NavLink to="/cart" className="flex items-center gap-2">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="w-4 h-4 flex items-center justify-center text-white bg-red-500 rounded-full indicator-item text-xs">
                8
              </span>
            </div>
            <h3 className="hidden md:block">Cart</h3>
          </NavLink>
          <button className="border hidden md:block cursor-pointer font-semibold py-2.5 px-5 rounded-sm">
            Sign in
          </button>
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="lg:hidden">
              <GiHamburgerMenu size={20} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sm"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
