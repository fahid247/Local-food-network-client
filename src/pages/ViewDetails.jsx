import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axiosPublic from "../axiosPublic";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchReview = async () => {
      setLoading(true);
      try {
        const res = await axiosPublic.get(`/reviews/${id}`);
        setReview(res.data);
      } catch (error) {
        console.error("Error fetching review:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i)
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="min-h-screen flex justify-center items-center text-center text-gray-600">
        <p>No review found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-base-200 via-base-300 to-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 h-[50vh] sm:h-[70vh] overflow-hidden rounded-l-3xl"
        >
          <img
            src={review.photo}
            alt={review.foodName}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Details */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 p-8 flex flex-col justify-between"
        >
          <div className="space-y-4">
            {/* Food Name */}
            <h2 className="text-3xl font-extrabold text-primary">
              {review.foodName}
            </h2>

            {/* Restaurant Info */}
            <div className="text-gray-700 flex flex-col sm:flex-row sm:items-center gap-2">
              <p className="font-semibold">{review.restaurantName}</p>
              <span className="text-sm text-gray-500">
                • {review.restaurantLocation}
              </span>
            </div>

            {/* Reviewer & Rating */}
            <div className="sm:flex items-center justify-between mt-2">
              <div className="flex items-center sm:gap-2 text-gray-600">
                <span>Reviewed by:</span>
                <span className="font-semibold">{review.reviewerName}</span>
              </div>

              <div className="flex items-center gap-1">
                {renderStars(review.rating)}
                <span className="text-gray-500 ml-1">({review.rating})</span>
              </div>
            </div>

            {/* Date */}
            <p className="text-sm text-gray-400">
              {new Date(review.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            {/* Review Text */}
            <p className="text-gray-700 mt-4 leading-relaxed">
              {review.reviewText}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => navigate("/allReviews")}
              className="btn btn-outline btn-primary"
            >
              Go to All-Reviews
            </button>
            <button onClick={() => navigate("/")} className="btn btn-primary">
              Go Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ViewDetails;
