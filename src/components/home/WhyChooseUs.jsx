import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: "🏖️",
      title: "Beach Adventures",
      desc: "Explore pristine beaches with expert guides.",
      features: [
        "Private Beach Access",
        "Sunset Views",
        "Photography Sessions",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🤿",
      title: "Water Sports",
      desc: "Kayaking, snorkeling, and island hopping.",
      features: ["Scuba Diving", "Jet Skiing", "Parasailing"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "🏨",
      title: "Luxury Stays",
      desc: "Stay in premium resorts and boutique hotels.",
      features: ["5-Star Resorts", "Beach Villas", "Private Pools"],
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: "⭐",
      title: "Trusted Services",
      desc: "Verified tours with 100% customer satisfaction.",
      features: [
        "24/7 Support",
        "Best Price Guarantee",
        "Flexible Cancellation",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "🚤",
      title: "Island Hopping",
      desc: "Explore multiple islands with private transfers.",
      features: ["Private Boats", "Multiple Islands", "Custom Routes"],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: "🍽️",
      title: "Gourmet Dining",
      desc: "Experience local cuisine with beachside dining.",
      features: ["Seafood Specialties", "Private Chefs", "Romantic Dinners"],
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: "📸",
      title: "Photo Services",
      desc: "Professional photography to capture memories.",
      features: ["Underwater Photos", "Drone Shots", "Professional Editing"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "🎯",
      title: "Custom Packages",
      desc: "Tailored itineraries for your perfect vacation.",
      features: [
        "Personalized Planning",
        "Flexible Duration",
        "Special Requests",
      ],
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-gray-200">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-gray-700 text-sm font-medium">
              Why We're The Best
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 font-sans">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Blissed Coral
            </span>
          </h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium Andaman travel services.
            We go beyond ordinary to create extraordinary memories.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative p-6 text-center">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <span className="text-white text-3xl">{benefit.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-sans group-hover:text-gray-900 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${benefit.gradient} rounded-full mr-3 flex-shrink-0`}
                      ></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Line */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${benefit.gradient} group-hover:w-3/4 transition-all duration-500 rounded-full`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Experience Andaman Like Never Before?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 10,000+ satisfied travelers who trusted us with their dream
              vacation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
