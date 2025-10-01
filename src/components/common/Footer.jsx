const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Wave Divider */}
      <div className="relative">
        <div className="absolute -top-1 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-slate-900"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r p-5 from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <img src="/logo-blissed.png" className="h-28" />
              </div>
              {/* <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Blissed Coral
              </h3> */}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Creating unforgettable memories in the pristine islands of Andaman
              & Nicobar. Your journey to paradise begins with us.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: "📘", label: "Facebook", color: "hover:bg-blue-500" },
                { icon: "📸", label: "Instagram", color: "hover:bg-pink-500" },
                { icon: "🐦", label: "Twitter", color: "hover:bg-sky-400" },
                { icon: "📽️", label: "YouTube", color: "hover:bg-red-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} border border-white/20`}
                  aria-label={social.label}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mr-3"></div>
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Adventure Tours", icon: "⚡" },
                { name: "Island Hopping", icon: "🏝️" },
                { name: "Scuba Diving", icon: "🤿" },
                { name: "Sunset Cruises", icon: "⛵" },
                { name: "Beach Resorts", icon: "🏖️" },
                { name: "Wildlife Safari", icon: "🐠" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 flex items-center group py-1"
                  >
                    <span className="text-sm mr-3 opacity-70 group-hover:opacity-100">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mr-3"></div>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium group-hover:text-amber-300 transition-colors">
                    +91 98765 43210
                  </p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">✉️</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium group-hover:text-amber-300 transition-colors">
                    hello@blissedcoral.com
                  </p>
                  <p className="text-gray-400 text-sm">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium group-hover:text-amber-300 transition-colors">
                    Port Blair
                  </p>
                  <p className="text-gray-400 text-sm">
                    Andaman & Nicobar Islands
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & App */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mr-3"></div>
              Stay Updated
            </h4>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-gray-300 mb-4 text-sm">
                Get exclusive offers and travel tips
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white/15 transition-all duration-300 text-white placeholder-gray-400 text-sm"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-amber-500/25">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Download App */}
            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-3">Download Our App</p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-black/30 hover:bg-black/50 border border-white/20 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg">📱</span>
                    <div className="text-left">
                      <p className="text-white text-xs">Get it on</p>
                      <p className="text-white font-semibold text-sm">
                        App Store
                      </p>
                    </div>
                  </div>
                </button>
                <button className="flex-1 bg-black/30 hover:bg-black/50 border border-white/20 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg">🤖</span>
                    <div className="text-left">
                      <p className="text-white text-xs">Download on</p>
                      <p className="text-white font-semibold text-sm">
                        Play Store
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Blissed Coral Adventure. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {["Privacy", "Terms", "Cookies"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-3">
                Secure Payments:
              </span>
              <div className="flex space-x-2">
                {["💳", "🏦", "📱", "🔐", "🌐"].map((method, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-amber-400">
                <span>⭐</span>
                <span className="text-sm text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="text-sm text-gray-300">5000+ Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
