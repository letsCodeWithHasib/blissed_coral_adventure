import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    feedback: "Best travel experience ever! Highly recommended.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    feedback: "Amazing services and breathtaking locations.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    feedback: "Everything was perfectly organized.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-coral-500 mb-10 text-center font-sans">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <p className="text-gray-700 mb-4 font-medium">"{t.feedback}"</p>
            <p className="font-semibold text-coral-500">{t.name}</p>
            <p>{"⭐".repeat(t.rating)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
