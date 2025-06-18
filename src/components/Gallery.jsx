import { useState } from "react";
import { FaImages } from "react-icons/fa";

const images = [
  "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg",
  "/images/6.jpg", "/images/7.jpg", "/images/8.jpg", "/images/9.jpg", "/images/10.jpg",
  "/images/11.jpg", "/images/12.jpg", "/images/13.jpg", "/images/14.jpg", "/images/15.jpg",
  "/images/16.jpg", "/images/17.jpg", "/images/18.jpg", "/images/19.jpg", "/images/20.jpg",
  "/images/21.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const visibleImages = images.slice(0, visibleCount);
  const remainingCount = images.length - visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, images.length));
  };

  return (
    <section id="gallery" className="py-12 px-4 bg-white dark:bg-gray-900 transition-colors">
      <h3 className="text-4xl font-extrabold text-pink-600 dark:text-pink-400 text-center mb-4">
        Our Work
      </h3>

      <h4 className="text-2xl font-semibold text-center text-pink-500 dark:text-pink-600 mb-8">
        Our Images
      </h4>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {visibleImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery image ${i + 1}`}
              className="rounded shadow w-full object-cover h-48 cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => setSelectedImage(img)}
            />
          ))}

          {remainingCount > 0 && (
            <button
              onClick={loadMore}
              className="flex flex-col items-center justify-center rounded shadow bg-gray-200 dark:bg-gray-700 cursor-pointer h-48 text-pink-600 dark:text-pink-400 text-2xl font-bold hover:bg-pink-100 dark:hover:bg-pink-900 transition"
              aria-label="Load more images"
            >
              <FaImages size={40} />
              <span className="mt-2">+{remainingCount}</span>
            </button>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="rounded max-h-[80vh] max-w-[90vw] object-contain"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-4xl font-bold"
            aria-label="Close image"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}
