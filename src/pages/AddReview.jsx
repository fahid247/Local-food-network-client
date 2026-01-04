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
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const newReview = {
      ...formData,
      email: user?.email,
      date: new Date().toISOString(),
    };

    try {
      const res = await axiosPublic.post("/reviews", newReview);
      if (res.data.insertedId) {
        setMessage("🎉 Review added successfully!");
      } else {
        setMessage("Review submitted successfully!");
      }

      setFormData({
        foodName: "",
        foodImage: "",
        restaurantName: "",
        location: "",
        rating: "",
        reviewText: "",
      });
    } catch (err) {
      console.error("Error submitting review:", err);
      setError("❌ Failed to add review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-base-100 rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-base-content">
            Add a New Review
          </h2>
          <p className="text-base-content/60 mt-2">
            Share your experience and help others discover great food
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Food Name */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              required
              
              className="w-full border border-primary rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none outline-none"
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Food Image URL
            </label>
            <input
              type="url"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              required
              
              className="w-full border border-primary rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none outline-none"
            />

            {formData.foodImage && (
              <img
                src={formData.foodImage}
                alt="Preview"
                className="mt-3 h-40 w-full object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Restaurant Name */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Restaurant Name
            </label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              required
              
              className="w-full border border-primary rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
             
              className="w-full border border-primary rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none outline-none"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Rating
            </label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full border border-primary rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none outline-none"
            >
              <option value="">Select rating</option>
              <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
              <option value="4">⭐⭐⭐⭐ (Very Good)</option>
              <option value="3">⭐⭐⭐ (Good)</option>
              <option value="2">⭐⭐ (Average)</option>
              <option value="1">⭐ (Poor)</option>
            </select>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Review
            </label>
            <textarea
              name="reviewText"
              value={formData.reviewText}
              onChange={handleChange}
              required
             
              className="w-full border border-primary rounded-lg px-4 py-3 h-28 focus:ring-2 focus:ring-primary focus:outline-none outline-none resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition
              ${
                loading
                  ? "bg-accent cursor-not-allowed"
                  : "bg-primary hover:bg-accent shadow-lg"
              }
            `}
          >
            {loading ? "Submitting Review..." : "Submit Review"}
          </button>

          {/* Messages */}
          {message && (
            <p className="text-center text-green-600 font-medium mt-3">
              {message}
            </p>
          )}
          {error && (
            <p className="text-center text-red-600 font-medium mt-3">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddReview;
