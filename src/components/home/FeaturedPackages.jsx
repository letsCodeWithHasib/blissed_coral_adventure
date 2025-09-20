import { motion } from "framer-motion";
import { Link } from "react-router";
import { packages as packagesData } from "../../data/packages";

const FeaturedPackages = () => {
  const featured = packagesData.slice(0, 4); // pick first 4 packages
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-coral-500 mb-8 font-sans text-center">
        Featured Packages
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-sans mb-2">
                {pkg.title}
              </h3>
              <p className="text-gray-600 font-medium mb-2">
                {pkg.duration} days
              </p>
              <p className="text-coral-500 font-bold mb-4">₹{pkg.price}</p>
              <Link
                to={`/packages/${pkg.id}`}
                className="text-white bg-coral-500 px-4 py-2 rounded-lg hover:bg-coral-600 transition font-sans"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPackages;
