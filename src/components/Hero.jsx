export default function Hero() {
  return (
    <section
      className="h-[90vh] flex items-center justify-center bg-[url('/images/1w.jpg')] bg-cover bg-center text-white relative overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-purple-900/70 z-0" />

      {/* Hero Content */}
      <div
        className="relative z-10 text-center px-4 py-8 md:py-16 max-w-2xl animate-fade-in-up"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-pink-200 drop-shadow-md mb-6 leading-tight tracking-wide">
          Make Your Day <br /> <span className="text-white">Unforgettable</span>
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-6 font-medium tracking-wide">
          Elegant planning and breathtaking decoration for your perfect wedding & events.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg hover:scale-105">
          <a href="#services">Explore Our Work</a>
        </button>
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
