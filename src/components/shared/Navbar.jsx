import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.querySelector("#hero-sentinel");

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

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
    <nav className={`fixed w-full top-0 z-50 ${scrolled ? "bg-white" : ""}`}>
      <div className="navbar relative py-7 max-w-7xl mx-auto px-4 lg:px-0">
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
            className={`hidden lg:flex items-center gap-1 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <FaHeart size={18} color={scrolled ? "#749B3F" : "white"} />{" "}
            Favorites
          </NavLink>
          <NavLink
            to="/cart"
            className={`flex items-center gap-2 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <div className="indicator">
              <FaCartShopping
                size={18}
                color={scrolled ? "#749B3F" : "white"}
              />
              <span className="w-4 h-4 flex items-center justify-center text-white bg-red-500 rounded-full indicator-item text-xs border border-white">
                8
              </span>
            </div>
            <h3 className="hidden lg:block">Cart</h3>
          </NavLink>
          <button
            className={`hidden lg:block cursor-pointer font-semibold py-2.5 px-5 rounded-sm ${
              scrolled
                ? "border border-black text-black"
                : "border border-white text-white "
            }`}
          >
            Sign in
          </button>
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="lg:hidden">
              <GiHamburgerMenu
                size={20}
                color={scrolled ? "#749B3F" : "white"}
              />
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
    </nav>
  );
};

export default Navbar;
