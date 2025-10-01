import { motion } from "framer-motion";
import { Link } from "react-router";

const FeaturedPackages = () => {
  const featuredPackages = [
    {
      id: 1,
      title: "Andaman Bliss",
      duration: "4 Nights / 5 Days",
      price: "28,999",
      originalPrice: "32,999",
      image:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Havelock Island",
        "Radhanagar Beach",
        "Cellular Jail",
        "Light & Sound Show",
      ],
      places: "Port Blair, Havelock",
      theme: "Family Friendly",
    },
    {
      id: 2,
      title: "Andaman Delight",
      duration: "5 Nights / 6 Days",
      price: "35,999",
      originalPrice: "39,999",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Havelock Island",
        "Neil Island",
        "Coral Safari",
        "Elephant Beach",
      ],
      places: "Port Blair, Havelock, Neil",
      theme: "Island Hopping",
    },
    {
      id: 3,
      title: "Andaman Paradise",
      duration: "6 Nights / 7 Days",
      price: "42,999",
      originalPrice: "47,999",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "All Major Islands",
        "Scuba Diving",
        "Limestone Caves",
        "Sunset Views",
      ],
      places: "Port Blair, Havelock, Neil, Baratang",
      theme: "Adventure & Leisure",
    },
    {
      id: 4,
      title: "Andaman Honeymoon Special",
      duration: "5 Nights / 6 Days",
      price: "48,999",
      originalPrice: "54,999",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Private Beach Dinner",
        "Couple Spa",
        "Romantic Cruise",
        "Candle Light Dinner",
      ],
      places: "Port Blair, Havelock",
      theme: "Romantic Getaway",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-sans">
            Featured <span className="text-amber-500">Packages</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated Andaman experiences designed to create unforgettable
            memories
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                />

                {/* Theme Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.theme}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-sans">
                  {pkg.title}
                </h3>

                {/* Places */}
                <div className="flex items-center text-gray-600 mb-3">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{pkg.places}</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  {pkg.highlights.slice(0, 2).map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600 mb-1"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                      {highlight}
                    </div>
                  ))}
                  <p className="text-xs text-gray-500 mt-1">
                    + {pkg.highlights.length - 2} more highlights
                  </p>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-amber-600">
                      ₹{pkg.price}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{pkg.originalPrice}
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                    Save ₹
                    {(
                      parseInt(pkg.originalPrice.replace(/,/g, "")) -
                      parseInt(pkg.price.replace(/,/g, ""))
                    ).toLocaleString()}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/packages"
            className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-2xl transition-all duration-300 group"
          >
            View All Packages
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
