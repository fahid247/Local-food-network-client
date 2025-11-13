import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 Illustration"
        className="w-80 mb-6"
      />
      <h1 className="text-6xl font-bold text-gray-800 mb-3">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-500 mb-6">
        The page you're looking for doesn't exist or was moved.
      </p>

      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
