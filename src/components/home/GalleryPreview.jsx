import img1 from "../../assets/image-1.jpeg";
import img2 from "../../assets/image-2.jpeg";
import img3 from "../../assets/image-3.jpeg";
import img4 from "../../assets/image-4.jpeg";
import img5 from "../../assets/image-5.jpeg";
// import img6 from "../../assets/image-6.jpeg";

const GalleryPreview = () => {
  const images = [img1, img2, img3, img4, img5, img3];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with modern styling */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-sans">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Grid layout inspired by Andamans website */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
            >
              {/* Main Image */}
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />

              {/* Dark Overlay - appears on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

              {/* Hover Info - inspired by Andamans website */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {getImageTitle(i)}
                      </h3>
                      <p className="text-sm text-white/90 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {getImageLocation(i)}
                      </p>
                    </div>
                    <div className="bg-amber-500 rounded-full p-3 transform scale-0 group-hover:scale-100 transition duration-500">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top left badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  Photo {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
};

// Helper functions for dynamic content
const getImageTitle = (index) => {
  const titles = [
    "Crystal Clear Waters",
    "White Sandy Beaches",
    "Marine Life",
    "Sunset Views",
    "Coral Reefs",
    "Island Adventures",
  ];
  return titles[index] || "Beautiful Scene";
};

const getImageLocation = (index) => {
  const locations = [
    "Havelock Island",
    "Radhanagar Beach",
    "North Bay Island",
    "Neil Island",
    "Ross Island",
    "Port Blair",
  ];
  return locations[index] || "Andaman Islands";
};

export default GalleryPreview;
