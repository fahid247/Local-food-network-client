import React, { useContext, useState } from "react";
import axiosPublic from "../axiosPublic";
import { AuthContext } from "../context/AuthContext";

const AddReview = () => {
  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    restaurantName: "",
    location: "",
    rating: "",
    reviewText: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {user} =useContext(AuthContext);


  const loggedInUser = {
    email: `${user.email}`,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const newReview = {
      ...formData,
      email: loggedInUser.email,
      date: new Date().toISOString(), // current date
    };

    try {
      const res = await axiosPublic.post("/reviews", newReview);
      if (res.data.insertedId) {
        setMessage("Review added successfully!");
      } else {
        setMessage("Review submitted!");
      }
      setFormData({
        foodName: "",
        foodImage: "",
        restaurantName: "",
        location: "",
        rating: "",
        reviewText: "",
      });
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage("Failed to add review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Add a New Review
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Enter food name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Food Image URL
          </label>
          <input
            type="url"
            name="foodImage"
            value={formData.foodImage}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Restaurant Name
          </label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Enter restaurant name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Enter restaurant location"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Star Rating (1–5)
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Review Text
          </label>
          <textarea
            name="reviewText"
            value={formData.reviewText}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 h-24 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
            placeholder="Write your review here..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Add Review"}
        </button>

        {message && (
          <p className="text-center text-sm mt-3 font-medium text-gray-700">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddReview;
