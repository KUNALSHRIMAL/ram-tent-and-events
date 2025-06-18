import { useState } from "react";
import { FaInstagram, FaMoon, FaSun, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-black dark:bg-gray-900 shadow fixed top-0 w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Brand Name */}
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/images/logo.jpg" // 🔁 Replace this with your actual logo path
              alt="Ram Tent and Events Logo"
              className="h-8 w-8 object-contain"
            />
            Ram Tent and Events
          </a>
        </h1>

        {/* Desktop nav + social icons */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-white hover:text-pink-500 transition">About</a>
          <a href="#gallery" className="text-white hover:text-pink-500 transition">Gallery</a>
          <a href="#services" className="text-white hover:text-pink-500 transition">Services</a>
          <a href="#contact" className="text-white hover:text-pink-500 transition">Contact</a>

          <button onClick={toggleTheme} className="text-white text-xl hover:text-yellow-400 transition" aria-label="Toggle Theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a href="https://wa.me/919983448943" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-xl">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/event_planner_jaipur" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 text-xl">
            <FaInstagram />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="w-8 h-8 flex flex-col justify-between items-center group">
            <span className={`block h-1 w-6 rounded-sm bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-1 w-6 rounded-sm bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-1 w-6 rounded-sm bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`md:hidden bg-black dark:bg-gray-900 transition-max-height duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <a onClick={() => setIsOpen(false)} href="#about" className="block px-6 py-3 text-white hover:bg-pink-600 transition">About</a>
        <a onClick={() => setIsOpen(false)} href="#gallery" className="block px-6 py-3 text-white hover:bg-pink-600 transition">Gallery</a>
        <a onClick={() => setIsOpen(false)} href="#services" className="block px-6 py-3 text-white hover:bg-pink-600 transition">Services</a>
        <a onClick={() => setIsOpen(false)} href="#contact" className="block px-6 py-3 text-white hover:bg-pink-600 transition">Contact</a>
        <div className="flex justify-center gap-6 px-6 py-4 border-t border-gray-800">
          <button onClick={toggleTheme} className="text-white text-2xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a href="https://wa.me/919983448943" target="_blank" rel="noopener noreferrer" className="text-green-400 text-2xl">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/event_planner_jaipur" target="_blank" rel="noopener noreferrer" className="text-pink-400 text-2xl">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
}
