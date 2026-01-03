import React, { useEffect, useState } from "react";
import axiosPublic from "../axiosPublic";
import "animate.css";
import { useNavigate } from "react-router";

let debounceTimer;

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  // Fetch all reviews
  const fetchReviews = async (searchTerm = "") => {
    setLoading(true);
    try {
      const res = await axiosPublic.get(`/reviews?search=${searchTerm}`);
      setReviews(res.data || []);
      setCurrentPage(1); // Reset page
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Search debounce
  useEffect(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchReviews(search);
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [search]);

  // Pagination logic (front-end)
  const indexOfLast = currentPage * reviewsPerPage;
  const indexOfFirst = indexOfLast - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-base-200 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content text-center mb-12 animate__animated animate__fadeInDown">
          All Reviews
        </h2>

        {/* Search */}
        <div className="flex justify-center mb-12 max-w-md mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by food name..."
            className="w-full border border-base-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={() => fetchReviews(search)}
            className="btn btn-primary rounded-r-md px-6"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-base-content/70 mb-6"><span className="loading loading-spinner text-warning"></span></p>
        )}

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 gap-8">
          {!loading && currentReviews.length > 0
            ? currentReviews.map((review, index) => (
                <div
                  key={review._id}
                  className="group bg-base-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 animate__animated animate__fadeInUp flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-base-content mb-1">
                      {review.foodName}
                    </h3>
                    <p className="text-sm text-base-content/70 mb-1">
                      {review.restaurantName} — {review.restaurantLocation}
                    </p>
                    <p className="text-sm font-medium text-base-content mb-2">
                      Reviewer:{" "}
                      <span className="font-semibold">{review.userEmail}</span>
                    </p>
                    <p className="text-xs text-base-content/50 mb-4">
                      {review.date
                        ? new Date(review.date).toLocaleDateString()
                        : "No date"}
                    </p>
                    <div className="mt-auto">
                      <button
                        onClick={() => navigate(`/viewDetails/${review._id}`)}
                        className="btn btn-outline btn-primary btn-sm w-full"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : !loading && (
                <p className="col-span-3 text-center text-base-content/70">
                  No reviews found.
                </p>
              )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="btn btn-sm btn-outline btn-primary disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`btn btn-sm ${
                  currentPage === i + 1
                    ? "btn-primary text-white"
                    : "btn-outline btn-primary"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="btn btn-sm btn-outline btn-primary disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllReviews;
