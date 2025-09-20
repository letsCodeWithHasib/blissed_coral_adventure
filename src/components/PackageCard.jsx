// src/components/PackageCard.jsx
import { Link } from "react-router";

const PackageCard = ({ id, title, price, duration, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{duration}</p>
        <p className="text-lg font-bold text-blue-600 mt-2">₹{price}</p>
        <Link
          to={`/packages/${id}`}
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
