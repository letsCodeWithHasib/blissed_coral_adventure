import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import BookNowModal from "./BookNowModal";
import EnquireModal from "./EnquireModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const packages = [
    {
      title: "Beach Tours",
      description: "Pristine beaches & sunset views",
      icon: "🏖️",
      href: "/packages/beach",
    },
    {
      title: "Adventure Tours",
      description: "Scuba diving & water sports",
      icon: "🤿",
      href: "/packages/adventure",
    },
    {
      title: "Family Packages",
      description: "Perfect for family vacations",
      icon: "👨‍👩‍👧‍👦",
      href: "/packages/family",
    },
    {
      title: "Luxury Tours",
      description: "Premium resorts & private villas",
      icon: "🌟",
      href: "/packages/luxury",
    },
    {
      title: "Honeymoon Special",
      description: "Romantic getaways",
      icon: "💑",
      href: "/packages/honeymoon",
    },
    {
      title: "Island Hopping",
      description: "Explore multiple islands",
      icon: "🚤",
      href: "/packages/island-hopping",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans backdrop-blur-md ${
        scroll
          ? "bg-white/95 shadow-2xl border-b border-gray-200/50"
          : "bg-white/90 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-2xl">🌴</span>
            </div>
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
          </motion.div>
          <div className="flex flex-col">
            <motion.span
              className="text-2xl tracking-tighter  font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Blissed Coral
            </motion.span>
            <span className="text-indigo-900 tracking-wide -mt-1">
              Adventure
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Gallery", href: "/gallery" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <Link
                to={item.href}
                className="text-gray-700 hover:text-amber-600 font-semibold transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}

          {/* Enhanced Mega Menu for Packages */}
          <motion.div
            className="relative"
            onHoverStart={() => setIsPackagesOpen(true)}
            onHoverEnd={() => setIsPackagesOpen(false)}
          >
            <motion.button
              whileHover={{ y: -2 }}
              className="text-gray-700 hover:text-amber-600 font-semibold transition-all duration-300 flex items-center space-x-1 group"
            >
              <span>Packages</span>
              <motion.span
                animate={{ rotate: isPackagesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </motion.button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isPackagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-4 w-96 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <span className="text-amber-500 mr-2">✨</span>
                      Popular Packages
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {packages.map((pkg, index) => (
                        <motion.div
                          key={pkg.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <Link
                            to={pkg.href}
                            className="block p-3 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 border border-transparent hover:border-amber-200 transition-all duration-300 group"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{pkg.icon}</span>
                              <div>
                                <div className="font-semibold text-gray-800 group-hover:text-amber-700">
                                  {pkg.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {pkg.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <Link
                        to="/packages"
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                      >
                        View All Packages
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <EnquireModal />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BookNowModal />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block"
          >
            <BookNowModal />
          </motion.div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/50"
          >
            <div className="px-6 py-4 space-y-1">
              {[
                { name: "Home", href: "/", icon: "🏠" },
                { name: "Packages", href: "/packages", icon: "🎒" },
                { name: "About", href: "/about", icon: "ℹ️" },
                { name: "Gallery", href: "/gallery", icon: "🖼️" },
                { name: "Contact", href: "/contact", icon: "📞" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 py-4 px-4 font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-xl transition-all duration-300 border border-transparent hover:border-amber-200"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-gray-200 space-y-3"
              >
                <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                  <EnquireModal />
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                  <BookNowModal />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
