import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simple modal components for now
  const BookNowModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Book Your Andaman Adventure
        </h3>
        <p className="text-gray-600 mb-6">
          Our travel expert will contact you within 30 minutes to customize your
          perfect trip.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-amber-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-amber-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-amber-500"
          />
          <button className="w-full bg-amber-500 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors">
            Get Custom Quote
          </button>
        </div>
        <button
          onClick={() => setIsBookNowOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );

  const EnquireModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Enquire About Packages
        </h3>
        <p className="text-gray-600 mb-6">
          Get detailed information about our best packages and exclusive offers.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-amber-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-amber-500"
          />
          <textarea
            placeholder="Your Requirements"
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-amber-500 resize-none"
          ></textarea>
          <button className="w-full bg-gray-800 text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors">
            Send Enquiry
          </button>
        </div>
        <button
          onClick={() => setIsEnquireOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden p-5 mt-20">
      {/* Interactive Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-emerald-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

        {/* Animated Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-10"></div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-amber-400 w-8 shadow-lg shadow-amber-400/50"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Trust Badges */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-3 mb-10"
          >
            {[
              { icon: "🏆", text: "TripAdvisor Excellence 2024" },
              { icon: "⭐", text: "4.9/5 (2,500+ Reviews)" },
              { icon: "🔒", text: "Safe & Secure Bookings" },
              { icon: "⚡", text: "Instant Confirmation" },
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl px-5 py-3 text-white text-sm font-semibold flex items-center gap-2 shadow-lg"
              >
                <span className="text-amber-300">{badge.icon}</span>
                {badge.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-sans leading-tight">
              Discover{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Andaman
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-amber-100 font-light">
                Your Paradise Awaits
              </span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <p className="text-xl md:text-2xl text-white/95 mb-6 font-light max-w-3xl mx-auto leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              ✨{" "}
              <span className="font-semibold text-amber-200">
                Luxury island experiences
              </span>{" "}
              crafted for unforgettable memories. From pristine beaches to
              underwater adventures, your perfect escape starts here.
            </p>

            {/* Enhanced Live Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-amber-200 font-medium">
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">🔥 24 Travelers Booked Today</span>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">⏳ 12 Spots Left This Week</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              {/* Book Now Button */}
              <motion.button
                onClick={() => setIsBookNowOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 group min-w-[200px]"
              >
                <span className="flex items-center justify-center gap-3">
                  Book Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xl"
                  >
                    🚀
                  </motion.span>
                </span>
                {/* Floating offer badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg"
                >
                  🔥 30% OFF
                </motion.div>
              </motion.button>

              {/* Enquire Button */}
              <motion.button
                onClick={() => setIsEnquireOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:bg-white/30 hover:border-white/50 transition-all duration-300 group min-w-[200px]"
              >
                <span className="flex items-center justify-center gap-3">
                  Enquire Now
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl"
                  >
                    💬
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap justify-center items-center gap-6 mt-8 text-white/80 text-sm font-medium"
            >
              {[
                { icon: "💳", text: "No Advance Payment" },
                { icon: "🔄", text: "Free Cancellation" },
                { icon: "👨‍👩‍👧‍👦", text: "Family Friendly" },
                { icon: "🏆", text: "Award Winning" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <span className="text-amber-300">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: "🏝️", label: "25+ Islands", sub: "Pristine Locations" },
              { icon: "🤿", label: "50+ Activities", sub: "Adventure & Fun" },
              { icon: "🏨", label: "Luxury Stays", sub: "5-Star Resorts" },
              { icon: "💰", label: "Best Price", sub: "Guaranteed" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-center text-white shadow-xl"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-lg mb-1">{item.label}</div>
                <div className="text-sm text-amber-200 font-medium">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/90"
        >
          <span className="text-sm font-medium rotate-90 origin-center whitespace-nowrap mb-4 tracking-wider">
            EXPLORE MORE
          </span>
          <div className="w-0.5 h-20 bg-gradient-to-b from-amber-400 via-orange-400 to-transparent rounded-full shadow-lg shadow-amber-400/30"></div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      {isBookNowOpen && <BookNowModal />}
      {isEnquireOpen && <EnquireModal />}
    </section>
  );
};

export default HeroSection;
