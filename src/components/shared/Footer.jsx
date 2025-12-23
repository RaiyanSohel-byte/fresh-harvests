import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/footerLogo.png";
import appStore from "../../assets/appStoreFooter.png";
import playStore from "../../assets/googleplayFooter.png";
import visa from "../../assets/Visa.png";
import paypal from "../../assets/Paypal.png";
import applePlay from "../../assets/ApplePay.png";

const Footer = () => {
  return (
    <footer className="bg-[#f4f6f6] mt-[150px] px-4 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 lg:py-14">
        <div className="hidden md:grid md:grid-cols-4 gap-10">
          <div className="max-w-[240px]">
            <img src={logo} alt="logo" className="mb-26 w-full" />

            <p className="text-sm font-medium mb-3">Download App:</p>
            <div className="flex gap-1 max-w-[120px]">
              <img src={appStore} alt="App Store" />
              <img src={playStore} alt="Play Store" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick links 1</h3>
            <ul className="space-y-3 text-sm text-gray-600 questrial">
              <li>Home</li>
              <li>Shop</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Detail Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick links 2</h3>
            <ul className="space-y-3 text-sm text-gray-600 questrial">
              <li>Favorites</li>
              <li>Cart</li>
              <li>Sign in</li>
              <li>Register</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact us</h3>
            <ul className="space-y-4 text-sm text-gray-600 questrial">
              <li className="flex items-start lg:items-center gap-3">
                <FaPhoneAlt className="text-green-600" />
                1234 5678 90
              </li>
              <li className="flex items-start lg:items-center gap-3">
                <FaEnvelope className="text-green-600" />
                Freshharvests@gmail.com
              </li>
              <li className="flex items-start lg:items-center gap-3">
                <FaMapMarkerAlt className="text-green-600" />
                Tanjung Sari Street, Pontianak, Indonesia
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm font-medium mb-3">
                Accepted Payment Methods:
              </p>
              <div className="flex gap-3">
                <img src={visa} alt="Visa" className="h-12" />
                <img src={paypal} alt="Paypal" className="h-12" />
                <img src={applePlay} alt="Apple Pay" className="h-12" />
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="md:hidden block">
          <div className="flex items-center gap-0 mb-6">
            <img src={logo} alt="logo" className="w-[175px]" />
          </div>
          <div className="grid grid-cols-3  md:hidden">
            <div>
              <h3 className="font-semibold text-xs mb-3">Quick links 1</h3>
              <ul className="space-y-2 questrial text-xs text-gray-600">
                <li>Home</li>
                <li>Shop</li>
                <li>About us</li>
                <li>Blog</li>
                <li>Detail Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xs mb-3">Quick links 2</h3>
              <ul className="space-y-2 questrial text-xs text-gray-600">
                <li>Favorites</li>
                <li>Cart</li>
                <li>Sign in</li>
                <li>Register</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xs mb-3">Contact</h3>
              <ul className="space-y-2 text-xs questrial text-gray-600">
                <li className="flex items-center gap-1">
                  <FaPhoneAlt className="text-green-600" />
                  1234 5678 90
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600 break-all">
                  <FaEnvelope className="text-green-600 shrink-0 mt-0.5" />
                  <span>Freshharvests@gmail.com</span>
                </li>
                <li className="flex items-start text-xs gap-1">
                  <FaMapMarkerAlt className="text-green-600 shrink-0 mt-0.5" />
                  Tanjung Sari Street, Pontianak, Indonesia
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium mb-3">
              Accepted Payment Methods:
            </p>
            <div className="flex gap-3">
              <img src={visa} alt="Visa" className="h-12" />
              <img src={paypal} alt="Paypal" className="h-12" />
              <img src={applePlay} alt="Apple Pay" className="h-12" />
            </div>
          </div>
          <p className="text-sm font-medium mb-3 mt-3">Download App:</p>
          <div className="flex gap-3">
            <img src={appStore} alt="App Store" className="h-10" />
            <img src={playStore} alt="Google Play" className="h-10" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex gap-4 mb-3 md:mb-0 order-1 md:order-2">
            <div className="bg-black text-white p-2 rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-black text-white p-2 rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-black text-white p-2 rounded-full">
              <FaInstagram />
            </div>
          </div>

          <p className="rubik-font font-semibold order-2 md:order-1 md:text-sm text-xs text-center md:text-left">
            © Copyright 2024, All Rights Reserved by Banana Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
