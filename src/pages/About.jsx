// src/pages/About.jsx
import { motion } from "framer-motion";
import TeamMemberCard from "../components/about/TeamMemberCard";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      bio: "With over 15 years in the travel industry, Rajesh founded Blissed Coral Adventure to share the beauty of Andaman with the world.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      bio: "Priya ensures every aspect of your journey runs smoothly, from accommodations to transportation.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Arun Singh",
      role: "Adventure Guide Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      bio: "Arun is a certified diving instructor and knows the best spots for snorkeling and adventure activities.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Meera Patel",
      role: "Customer Experience Manager",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      bio: "Meera ensures every guest has an unforgettable experience and handles special requests with care.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            About Blissed Coral Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Crafting unforgettable experiences in the pristine islands of
            Andaman & Nicobar since 2010
          </motion.p>
        </div>
      </div>

      <div className="container-custom">
        {/* Our Story Section */}
        <section className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Blissed Coral Adventure was born from a deep love for the
                Andaman & Nicobar Islands. Our founder, Rajesh Kumar, first
                visited these islands in 2008 and was captivated by their
                untouched beauty, vibrant marine life, and rich cultural
                heritage.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation with just one boat and a
                passion for sharing these islands with others has grown into a
                premier tour company that has helped thousands of travelers
                discover the magic of Andaman.
              </p>
              <p className="text-gray-600">
                Today, we continue to operate with the same passion and
                commitment to sustainable tourism that inspired our beginnings.
                We believe in creating experiences that not only delight our
                guests but also respect and preserve the natural environment and
                local communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Andaman Islands"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-coral-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">12+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="section-padding bg-primary-50 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to creating meaningful travel experiences while
              upholding our core values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                Sustainable Tourism
              </h3>
              <p className="text-gray-600">
                We prioritize eco-friendly practices and support local
                communities to ensure the islands remain pristine for future
                generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                Unforgettable Experiences
              </h3>
              <p className="text-gray-600">
                We craft personalized journeys that create lasting memories,
                from adventure activities to serene beach moments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                Your safety is our top priority. All our activities are
                conducted with certified guides and proper safety equipment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Andaman is Special Section */}
        <section className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Why Andaman is Special
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover what makes these islands a truly unique destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-coral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800">
                    Pristine Beaches
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Home to some of the world's most beautiful beaches,
                    including Radhanagar Beach, often ranked among Asia's best.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-coral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800">
                    Rich Marine Life
                  </h3>
                  <p className="text-gray-600 mt-2">
                    The coral reefs surrounding the islands are home to diverse
                    marine species, making it a paradise for snorkeling and
                    diving.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-coral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800">
                    Historical Significance
                  </h3>
                  <p className="text-gray-600 mt-2">
                    The Cellular Jail stands as a memorial to India's freedom
                    struggle, offering a poignant glimpse into the nation's
                    history.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-coral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800">
                    Unique Indigenous Culture
                  </h3>
                  <p className="text-gray-600 mt-2">
                    The islands are home to indigenous tribes with distinct
                    cultures and traditions that have been preserved for
                    centuries.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-primary-50 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our passionate team of travel experts is dedicated to making your
              Andaman experience unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-10 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Andaman?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us craft your perfect island getaway with personalized
              attention and local expertise
            </p>
            <button className="btn-secondary mr-4">Browse Packages</button>
            <button className="bg-white text-primary-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
