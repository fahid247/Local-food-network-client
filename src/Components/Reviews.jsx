import React, { useEffect, useState, useRef } from "react";
import axiosPublic from "../axiosPublic";
import { useNavigate } from "react-router";
import "animate.css"; 

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosPublic.get("/reviews");
        setAllReviews(response.data);
        const sortedReviews = response.data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);
        setReviews(sortedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
            entry.target.style.opacity = 1; 
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = 0;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [reviews]);

  const handleShowAll = () => {
    setReviews(allReviews);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Top-Rated Reviews
          </h2>
          <button
            onClick={handleShowAll}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
          >
            Show All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-500"
            >
              <img
                src={review.photo}
                alt={review.foodName}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{review.foodName}</h3>
                <p className="text-gray-600 mb-1">
                  {review.restaurantName} — {review.restaurantLocation}
                </p>
                <p className="text-gray-800 font-medium mb-2">
                  Reviewer: {review.reviewerName}
                </p>
                <p className="text-yellow-500 font-semibold mb-4">
                  Rating: {review.rating} / 5
                </p>
                <button
                  onClick={() => {
                    navigate("viewDetails");
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
