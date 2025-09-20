import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnquireModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Enquire Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 border border-coral-500 text-coral-500 font-semibold rounded-lg shadow-sm hover:bg-coral-50 transition"
      >
        Enquire
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Modal Header */}
                <h2 className="text-2xl font-bold text-coral-500 mb-4">
                  Send an Enquiry
                </h2>

                {/* Form */}
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-coral-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-coral-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      placeholder="Your enquiry..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-coral-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-coral-500 text-white font-semibold py-3 rounded-lg hover:bg-coral-600 transition"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnquireModal;
