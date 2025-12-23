import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import Modal from "../../auth/Modal";
import useAxios from "../../hooks/useAxios";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access-token")
  );
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const email = getToken();
    if (!email) {
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

  return (
    <div className="fixed w-screen top-0 left-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled ? "backdrop-blur bg-white/60 shadow-md" : "bg-transparent"
        }`}
      ></div>

      <header className="relative">
        <nav className="py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-0 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-50" />
            </div>

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
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <IoMdHeart color={isScrolled ? "#749B3F" : "white"} /> Favorites
              </span>

              <div
                className={`questrial text-sm relative flex items-center gap-2 cursor-pointer ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <FaCartArrowDown color={isScrolled ? "#749B3F" : "white"} />
                <span className="absolute -top-2 left-1.5 bg-red-500 text-white text-xs px-1 rounded-full">
                  3
                </span>
                Cart
              </div>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className={`border px-5 py-2 rounded-md font-semibold ${
                    isScrolled
                      ? "border-black text-black"
                      : "border-white text-white"
                  }`}
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  className={`border px-5 py-2 rounded-md font-semibold ${
                    isScrolled
                      ? "border-black text-black"
                      : "border-white text-white"
                  }`}
                >
                  Sign in
                </button>
              )}
            </div>

            {/* mobile menu */}
            <div className="md:hidden flex items-center gap-4">
              <div
                className={`questrial text-sm relative flex items-center gap-2 cursor-pointer ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <FaCartArrowDown color={isScrolled ? "#749B3F" : "white"} />
                <span className="absolute -top-2 left-1.5 bg-red-500 text-white text-xs px-1 rounded-full">
                  3
                </span>
                Cart
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <TiThMenu
                  color={isScrolled ? "black" : "white"}
                  className="text-2xl"
                />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mx-4 mt-4 p-5 space-y-4">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
                Shop
              </NavLink>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About us
              </NavLink>
              <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </NavLink>

              {isLoggedIn && userRole === "ADMIN" && (
                <NavLink
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="block font-bold text-green-600"
                >
                  Admin
                </NavLink>
              )}

              <hr />

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full border border-red-400 text-red-600 py-2 rounded-md font-bold"
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
            </div>
          )}
        </nav>
      </header>

      {/* modal */}
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
