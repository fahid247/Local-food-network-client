import React, { useEffect, useState, useRef } from "react";
import axiosPublic from "../axiosPublic";
import { useNavigate } from "react-router";
import "animate.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosPublic.get("/reviews");
        const sortedReviews = response.data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 8);
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

  return (
    <section className="py-20 bg-base-200">
      <div className=" container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-[clamp(22px,4vw,36px)] font-extrabold text-base-content">
              Top-Rated Reviews
            </h2>
            <p className="text-base-content/70 mt-1">
              Discover the most loved dishes from our community
            </p>
          </div>

          <button
            onClick={() => navigate("/allReviews")}
            className="btn btn-primary btn-sm sm:btn-md"
          >
            Show All Reviews
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-base-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={review.photo}
                  alt={review.foodName}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 badge badge-primary text-primary-content font-semibold">
                  ⭐ {review.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold text-base-content mb-1">
                  {review.foodName}
                </h3>

                <p className="text-sm text-base-content/70 mb-2">
                  {review.restaurantName} — {review.restaurantLocation}
                </p>

                <p className="text-sm font-medium text-base-content mb-4">
                  Reviewer:{" "}
                  <span className="font-semibold">{review.reviewerName}</span>
                </p>

                {/* Button stays aligned */}
                <button
                  onClick={() => navigate(`/viewDetails/${review._id}`)}
                  className="btn btn-outline btn-primary btn-sm w-full mt-auto"
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
