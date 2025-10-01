import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Simulate API call
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              Exclusive Offers
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-sans">
            Start Your{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Island Adventure
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get curated travel insights, exclusive package deals, and early
            access to premium Andaman experiences delivered to your inbox.
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-10">
            {[
              { number: "5K+", label: "Subscribers" },
              { number: "50+", label: "Exclusive Deals" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300 text-lg font-medium"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200">
                  ✉️
                </div>
              </div>
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold rounded-2xl hover:from-amber-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-amber-500/25 flex items-center justify-center space-x-2 min-w-[160px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe Now</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.form>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center space-x-3 text-white">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Welcome Aboard!</h3>
                  <p className="text-blue-100">
                    Check your email for a special welcome offer.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Trust Elements */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm">
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span>⭐</span>
              <span>Exclusive member-only deals</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-bounce">
        <div className="w-6 h-6 bg-amber-400/30 rounded-full"></div>
      </div>
      <div className="absolute top-10 right-10 animate-bounce delay-1000">
        <div className="w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Newsletter;
