import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-300 text-black py-5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

        {/* Logo & Name with Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-3">
            
            <span className="text-2xl font-bold text-black">Local Foods Network</span>
          </div>
          <p className="text-sm text-black max-w-xs text-center md:text-left">
            Discover the best food experiences, reviews, and hidden gems around you!
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
            <FaLinkedinIn size={20} />
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-black pt-4 text-center text-black text-sm">
        &copy; {new Date().getFullYear()} Local Foods Network. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
