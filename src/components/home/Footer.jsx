const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 font-sans">
            Blissed Coral Adventure
          </h3>
          <p>
            Explore Andaman & Nicobar with our curated travel packages and
            unforgettable adventures.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 font-sans">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-coral-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/packages" className="hover:text-coral-500 transition">
                Packages
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-coral-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-coral-500 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-coral-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 font-sans">Contact Us</h3>
          <p>Phone: +91 12345 67890</p>
          <p>Email: info@blissedcoral.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-coral-500 transition">
              🌐
            </a>
            <a href="#" className="hover:text-coral-500 transition">
              📘
            </a>
            <a href="#" className="hover:text-coral-500 transition">
              📸
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-gray-400">
        © 2025 Blissed Coral Adventure. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
