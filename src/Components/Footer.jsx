import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ================= BRAND ================= */}
        <div>
          <h2 className="text-2xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Food🕸Net
          </h2>
          <p className="text-sm mt-3 text-base-content/70 max-w-sm">
            Discover the best local food experiences, honest reviews, and
            community-driven recommendations near you.
          </p>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <ul className="space-y-3 text-sm text-base-content/80">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>fahid32446@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>+880 1644-887100</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* ================= SOCIAL ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-base-300 hover:border-primary
                         hover:text-primary transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-base-300 hover:border-primary
                         hover:text-primary transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-base-300 hover:border-primary
                         hover:text-primary transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-base-300 hover:border-primary
                         hover:text-primary transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-base-300 py-4 text-center text-sm text-base-content/60">
        © {new Date().getFullYear()} FoodNet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
