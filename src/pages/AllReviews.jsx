import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../axiosPublic";
import "animate.css";
import { useNavigate } from "react-router";

const reviewsPerPage = 9;

const AllReviews = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("date-desc");

  const [sortField, sortOrder] = sort.split("-");

  const { data, isLoading } = useQuery({
    queryKey: ["reviews", search, currentPage, sort],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/reviews?search=${search}&page=${currentPage}&limit=${reviewsPerPage}&sort=${sortField}&order=${sortOrder}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const reviews = data?.reviews || [];
  const totalPages = data?.totalPages || 1;

  return (
    <section className="py-20 bg-base-200 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 animate__animated animate__fadeInDown">
          All Reviews
        </h2>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-2xl mx-auto">
          <div className="flex justify-center mb-12 max-w-md mx-auto" >
            <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            
            className="w-full border border-primary rounded-l-md px-4 py-2 focus:ring-2 focus:outline-none focus:ring-primary"
          />
          <button type="button"  className="btn btn-primary rounded-r-md px-6" > Search </button>
          </div>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            className="select select-bordered"
          >
            <option value="date-desc">Newest</option>
            <option value="date-asc">Oldest</option>
            <option value="rating-desc">Top Rated</option>
            <option value="rating-asc">Lowest Rated</option>
          </select>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center my-12">
            <span className="loading loading-spinner loading-lg text-warning"></span>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {!isLoading &&
            reviews.map((review, index) => (
              <div
                key={review._id}
                className="group bg-base-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 animate__animated animate__fadeInUp flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={review.photo}
                    alt={review.foodName}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 badge badge-primary">
                    ⭐ {review.rating}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold">{review.foodName}</h3>
                  <p className="text-sm opacity-70">
                    {review.restaurantName} — {review.restaurantLocation}
                  </p>

                  <p className="text-sm mt-2">
                    Reviewer: <b>{review.userEmail}</b>
                  </p>

                  <button
                    onClick={() => navigate(`/viewDetails/${review._id}`)}
                    className="btn btn-outline btn-primary btn-sm mt-auto"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12 flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="btn btn-sm btn-outline"
            >
              Prev
            </button>

            {[...Array(totalPages).keys()].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`btn btn-sm ${
                  currentPage === i + 1 ? "btn-primary" : "btn-outline"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="btn btn-sm btn-outline"
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
