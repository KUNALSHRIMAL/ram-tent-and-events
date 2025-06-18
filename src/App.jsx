import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import VideoSlider from "./components/VideoSlider";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist theme in localStorage and apply on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <Hero />
        <About />
        <Gallery />
        <VideoSlider />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
