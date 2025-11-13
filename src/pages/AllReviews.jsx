import React, { useEffect, useState } from "react";
import axiosPublic from "../axiosPublic";

let debounceTimer;

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchReviews = async (searchTerm = "") => {
    setLoading(true);
    try {
      const res = await axiosPublic.get(`/reviews?search=${searchTerm}`);
      setReviews(res.data || []);
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


  useEffect(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchReviews(search);
    }, 200);
    return () => clearTimeout(debounceTimer);
  }, [search]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          All Reviews
        </h2>

        
        <div className="flex justify-center mb-10 max-w-md mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by food name..."
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 rounded-r-md transition"
            onClick={() => fetchReviews(search)}
          >
            Search
          </button>
        </div>

        
        {loading && <p className="text-center text-gray-500">Loading...</p>}

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={review.photo}
                  alt={review.foodName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">
                    {review.foodName}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    {review.restaurantName} — {review.restaurantLocation}
                  </p>
                  <p className="text-yellow-500 font-medium mb-2">
                    ⭐ {review.rating} / 5
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Reviewer: {review.userEmail}
                  </p>
                  <p className="text-xs text-gray-400">
                    {review.date
                      ? new Date(review.date).toLocaleDateString()
                      : "No date"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <p className="col-span-3 text-center text-gray-500">
                No reviews found.
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
