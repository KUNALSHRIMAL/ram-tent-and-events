import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <footer className="bg-black dark:bg-gray-900 text-gray-300 py-10 px-6 sm:px-12 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        {/* Left Section with logo */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xs">
          <img
            src="/images/logo.jpg" // 🔁 Replace with your actual logo path
            alt="Ram Tent and Events Logo"
            className="h-12 w-12 object-contain mb-3"
          />
          <h2 className="text-pink-600 dark:text-pink-400 font-extrabold text-2xl mb-4">
            Ram Tent and Events
          </h2>
          <p>Owner: Bhagwan Sahay Bandhiwal</p>
          <p>Managed by: Mukul Bandhiwal</p>
        </div>

        {/* Center Section */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-xs text-center md:text-left space-y-4 md:pl-[90px]">
          <h3 className="text-pink-600 dark:text-pink-400 font-semibold text-xl mb-2">Contact Info</h3>

          <p className="flex items-center justify-center md:justify-start space-x-3 hover:text-pink-400 transition cursor-pointer">
            <FaPhone className="text-pink-600 dark:text-pink-400" />
            <a href="tel:+919983448943" aria-label="Phone number">9983448943</a>
          </p>

          <p className="flex items-center justify-center md:justify-start space-x-3 hover:text-pink-400 transition cursor-pointer">
            <FaEnvelope className="text-pink-600 dark:text-pink-400" />
            <a href="mailto:mukulbandhiwal1@gmail.com" aria-label="Email address">
              mukulbandhiwal1@gmail.com
            </a>
          </p>

          <p className="flex items-start justify-center md:justify-start space-x-3 text-left">
            <FaMapMarkerAlt className="text-pink-600 dark:text-pink-400 mt-1" />
            <span>
              H.No. 4219, Jai Lal Munshi Ka Rasta,<br />
              Near Santoshi Mata Temple,<br />
              Chandpole Bazar, Jaipur, Rajasthan – 302001
            </span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-xs space-y-6 text-center md:text-left md:pl-[160px]">
          <nav className="flex flex-col space-y-3 text-pink-600 dark:text-pink-400 font-semibold">
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#gallery" className="hover:text-pink-400 transition">Gallery</a>
            <a href="#services" className="hover:text-pink-400 transition">Services</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </nav>

          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="hover:text-pink-400 transition"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
            <a
              href="https://wa.me/919983448943"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/event_planner_jaipur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ram Tent and Events. All rights reserved.
      </div>
    </footer>
  );
}
