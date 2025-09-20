// src/components/common/PackageCard.jsx
import { Link } from "react-router";
import { motion } from "framer-motion";

const PackageCard = ({ package: pkg }) => {
  return (
    <motion.div
      className="package-card bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Popular
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{pkg.destinations.join(", ")}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {pkg.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {pkg.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary-600">
              ₹{pkg.price.toLocaleString()}
            </span>
            {pkg.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{pkg.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {pkg.duration}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={`/packages/${pkg.id}`}
            className="text-primary-600 hover:text-primary-800 font-medium text-sm flex items-center"
          >
            View Details
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <button className="btn-primary text-sm py-2 px-4">Book Now</button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
