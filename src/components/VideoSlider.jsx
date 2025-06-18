import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  "1v.mp4",
  "2v.mp4",
  "3v.mp4",
  "4v.mp4",
].map(video => `${import.meta.env.BASE_URL}videos/${video}`);

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="pt-4 pb-16 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto relative">
        <h4 className="text-2xl font-semibold text-center text-pink-500 dark:text-pink-600 mb-8">
          Our Videos
        </h4>

        <div className="relative w-full h-[600px] sm:h-[480px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src={videos[currentIndex]}
            muted
            loop={false}
            onEnded={nextVideo}
            onClick={togglePlayPause}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full h-full object-cover cursor-pointer"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevVideo();
            }}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextVideo();
            }}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
