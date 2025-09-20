// src/components/Footer.jsx
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">AndamanTours</h3>
          <p className="text-sm">
            Explore the beauty of Andaman & Nicobar Islands with our exclusive
            packages designed just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Packages</li>
            <li>Announcements</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2">
            <Phone size={16} /> +91 9876543210
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} /> info@andamantours.com
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-gray-200" />
            <Instagram className="cursor-pointer hover:text-gray-200" />
            <Twitter className="cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-blue-500 pt-4">
        © {new Date().getFullYear()} AndamanTours. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
