import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import Modal from "../../auth/Modal";
import useAxios from "../../hooks/useAxios";
import { FaCartShopping } from "react-icons/fa6";

const getToken = () => {
  const token = localStorage.getItem("access-token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.email;
  } catch {
    return null;
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnHero, setIsOnHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access-token")
  );
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 10);

      if (!hero) {
        setIsOnHero(false);
        return;
      }

      const heroBottom = hero.offsetHeight;
      setIsOnHero(scrollY < heroBottom - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const email = getToken();
    if (!email) {
      setLoading(false);
      return;
    }

    useAxios
      .get(`/users?email=${email}`)
      .then((res) => {
        const user = res?.data?.data?.data?.[0];
        setIsLoggedIn(true);
        setUserRole(user.role);
      })
      .catch(() => {
        localStorage.removeItem("access-token");
        setIsLoggedIn(false);
        setUserRole(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    setUserRole(null);
    setIsLoggedIn(false);
    toast.success("Logged out!");
  };

  const heroStyle = isOnHero && !isScrolled;

  return (
    <div className="fixed w-screen top-0 left-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          heroStyle ? "bg-transparent" : "backdrop-blur bg-white/60 shadow-md"
        }`}
      ></div>

      <header className="relative">
        <nav className="py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-0 flex items-center justify-between">
            <img src={logo} alt="logo" className="w-50" />

            <ul className="hidden md:flex items-center gap-12 text-[#4A4A52] font-medium">
              <NavLink
                to="/"
                className="text-sm hover:text-green-600 questrial"
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className="text-sm hover:text-green-600 questrial"
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                className="text-sm hover:text-green-600 questrial"
              >
                About us
              </NavLink>
              <NavLink
                to="/blog"
                className="text-sm hover:text-green-600 questrial"
              >
                Blog
              </NavLink>
              {isLoggedIn && userRole === "ADMIN" && (
                <NavLink
                  to="/dashboard"
                  className="text-sm hover:text-green-600 questrial"
                >
                  Dashboard
                </NavLink>
              )}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <span
                className={`questrial text-sm flex items-center gap-2 cursor-pointer ${
                  heroStyle ? "text-white" : "text-black"
                }`}
              >
                <IoMdHeart color={heroStyle ? "white" : "#749B3F"} />
                Favorites
              </span>

              <div
                className={`questrial text-sm relative flex items-center gap-2 cursor-pointer ${
                  heroStyle ? "text-white" : "text-black"
                }`}
              >
                <FaCartShopping color={heroStyle ? "white" : "#749B3F"} />
                <span className="absolute -top-2 left-1.5 bg-red-500 text-white text-xs px-1 rounded-full border border-white">
                  3
                </span>
                Cart
              </div>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className={`border px-5 py-2 rounded-md font-semibold ${
                    heroStyle
                      ? "border-white text-white"
                      : "border-black text-black"
                  }`}
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  className={`border px-5 py-2 rounded-md font-semibold ${
                    heroStyle
                      ? "border-white text-white"
                      : "border-black text-black"
                  }`}
                >
                  Sign in
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center gap-4">
              <div
                className={`questrial text-sm relative flex items-center gap-2 cursor-pointer ${
                  heroStyle ? "text-white" : "text-black"
                }`}
              >
                <FaCartShopping
                  size={18}
                  color={heroStyle ? "white" : "#749B3F"}
                />
                <span className="absolute -top-2 left-2 bg-red-500 text-white text-xs px-1 rounded-full border border-white">
                  3
                </span>
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <TiThMenu
                  color={heroStyle ? "white" : "black"}
                  className="text-2xl"
                />
              </button>
            </div>
          </div>

          {menuOpen && (
            <ul className="md:hidden bg-white shadow-lg rounded-lg mx-4 mt-4 p-5 space-y-4 ">
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
                  Shop
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  About us
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </NavLink>
              </li>

              {isLoggedIn && userRole === "ADMIN" && (
                <li>
                  <NavLink
                    to="/admin"
                    onClick={() => setMenuOpen(false)}
                    className="block font-bold text-green-600"
                  >
                    Admin
                  </NavLink>
                </li>
              )}

              <hr />

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full border border-orange-400 text-orange-600 py-2 rounded-md font-bold"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full border py-2 rounded-md font-bold"
                >
                  Sign in
                </button>
              )}
            </ul>
          )}
        </nav>
      </header>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        setIsLoggedIn={setIsLoggedIn}
        setLoading={setLoading}
        setUserRole={setUserRole}
      />
    </div>
  );
};

export default Navbar;
