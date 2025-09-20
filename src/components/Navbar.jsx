import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import BookNowModal from "./common/BookNowModal";
import EnquireModal from "./common/EnquireModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans ${
        scroll ? "bg-white/70 shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1">
          <span className="text-coral-500 text-3xl font-bold">Blissed</span>
          <span className="text-blue-800 text-3xl font-semibold">Coral</span>
          <span className="text-gray-700 text-xl ml-1">Adventure</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-coral-500 font-medium transition"
          >
            Home
          </Link>

          {/* Mega Menu for Packages */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-coral-500 font-medium transition flex items-center space-x-1">
              Packages
              <svg
                className="w-4 h-4 ml-1"
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
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul className="p-4 space-y-2">
                <li>
                  <Link
                    to="/packages/beach"
                    className="block px-3 py-2 rounded hover:bg-coral-50"
                  >
                    Beach Tours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packages/adventure"
                    className="block px-3 py-2 rounded hover:bg-coral-50"
                  >
                    Adventure Tours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packages/family"
                    className="block px-3 py-2 rounded hover:bg-coral-50"
                  >
                    Family Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packages/luxury"
                    className="block px-3 py-2 rounded hover:bg-coral-50"
                  >
                    Luxury Tours
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            to="/about"
            className="text-gray-700 hover:text-coral-500 font-medium transition"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-coral-500 font-medium transition"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-coral-500 font-medium transition"
          >
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <BookNowModal />
          <EnquireModal />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-500"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
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
                className="w-6 h-6"
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
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                to="/"
                className="block py-2 px-2 font-medium text-gray-700 hover:bg-coral-50 rounded"
              >
                Home
              </Link>
              <Link
                to="/packages"
                className="block py-2 px-2 font-medium text-gray-700 hover:bg-coral-50 rounded"
              >
                Packages
              </Link>
              <Link
                to="/about"
                className="block py-2 px-2 font-medium text-gray-700 hover:bg-coral-50 rounded"
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="block py-2 px-2 font-medium text-gray-700 hover:bg-coral-50 rounded"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-2 font-medium text-gray-700 hover:bg-coral-50 rounded"
              >
                Contact
              </Link>
              <Link
                to="/book"
                className="block py-2 px-2 font-semibold text-white bg-coral-500 rounded hover:bg-coral-600"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
