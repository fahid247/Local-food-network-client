import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const WelcomePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-base-300 to-base-200 overflow-hidden p-6">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full translate-x-1/4 translate-y-1/4 animate-pulse"></div>

      {/* Welcome Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center text-center"
      >
        {/* Profile */}
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg mb-6"
          />
        ) : (
          <FaUserCircle className="text-primary text-32xl w-32 h-32 mb-6" />
        )}

        {/* Welcome Text */}
        <h1 className="text-4xl sm:text-5xl font-bold text-base-content mb-4 animate-fadeIn">
          Welcome, {user?.displayName || "Food Lover"}!
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-xl animate-fadeIn delay-200">
          We're excited to have you back. Explore your dashboard, manage your
          orders, and discover delicious experiences!
        </p>

        {/* CTA Button */}
        <div className="sm:flex gap-4">
          <motion.button
            onClick={() => {
              navigate("/dashboard/my-reviews");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-primary text-primary-content font-semibold rounded-lg shadow-lg hover:bg-accent transition"
          >
            Go to My Reviews
          </motion.button>
          <motion.button
            onClick={() => {
              navigate("/dashboard/add-reviews");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-primary text-primary-content font-semibold rounded-lg shadow-lg hover:bg-accent transition"
          >
            Go to Add Reviews
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
