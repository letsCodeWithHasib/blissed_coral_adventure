import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    feedback:
      "Best travel experience ever! The Andaman islands exceeded all our expectations. The crystal clear waters were absolutely breathtaking.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    feedback:
      "Amazing services and breathtaking locations. Our family had the most memorable vacation. The snorkeling experience was incredible.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    feedback:
      "Everything was perfectly organized from start to finish. The tour guides were knowledgeable and accommodations were luxurious.",
    rating: 4,
  },
  {
    name: "Priya Patel",
    feedback:
      "Absolutely magical experience! The sunset cruise was the highlight of our trip. The team made sure every detail was taken care of.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    feedback:
      "Professional and reliable service. The Andaman adventure was beyond our imagination. The marine life was spectacular.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    feedback:
      "Unforgettable honeymoon experience! The private beach dinner was so romantic. Everything was perfectly arranged.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate how many groups of 3 we can show
  const totalGroups = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [totalGroups, isPaused]);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  // Get current 3 testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4 font-sans">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their unforgettable
            experiences
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonials}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-2xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-gray-200 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonials}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-2xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-gray-200 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5"
              >
                {getCurrentTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 group"
                  >
                    {/* Quote Icon */}
                    <div className="text-4xl text-blue-100 mb-4 group-hover:text-blue-200 transition-colors">
                      "
                    </div>

                    {/* Feedback */}
                    <p className="text-gray-700 mb-6 leading-relaxed font-medium min-h-[120px]">
                      "{testimonial.feedback}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-amber-500"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Name */}
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
