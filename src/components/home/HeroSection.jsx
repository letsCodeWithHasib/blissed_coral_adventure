import { motion } from "framer-motion";
import BookNowModal from "../common/BookNowModal";
import EnquireModal from "../common/EnquireModal";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/andaman-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl font-bold font-sans mb-4"
        >
          Explore Andaman & Nicobar
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-lg md:text-xl mb-8 font-medium font-sans"
        >
          Curated travel packages for unforgettable adventures.
        </motion.p>
        <div className="flex space-x-4">
          <BookNowModal />
          <EnquireModal />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
