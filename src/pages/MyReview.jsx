import React, { useContext, useEffect, useState } from "react";
import axiosPublic from "../axiosPublic";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    const fetchReviews = async () => {
      try {
        const res = await axiosPublic.get("/reviews");
        const allReviews = res.data?.reviews || [];

        const userReviews = allReviews.filter(
          (review) => review.email === user.email
        );

        setReviews(userReviews);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      await axiosPublic.delete(`/reviews/${id}`);
      setReviews((prev) => prev.filter((r) => r._id !== id));
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-base-content/60">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-primary">
          My Reviews
        </h2>
        <p className="text-base-content/60 mt-2">
          Manage, edit, or remove the reviews you've shared
        </p>
      </div>

      {/* Empty State */}
      {reviews.length === 0 ? (
        <div className="bg-base-100 rounded-box shadow p-10 text-center">
          <p className="text-base-content/60 text-lg">
            You haven't added any reviews yet.
          </p>
        </div>
      ) : (
        <div className="bg-base-100 rounded-box shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>Image</th>
                  <th>Food</th>
                  <th>Restaurant</th>
                  <th>Date</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {reviews.map((review) => (
                  <tr key={review._id} className="hover:bg-base-200 transition">
                    <td>
                      <img
                        src={review.foodImage}
                        alt={review.foodName}
                        className="w-16 h-16 rounded-box object-cover border border-base-300"
                      />
                    </td>

                    <td className="font-semibold text-base-content">
                      {review.foodName}
                    </td>

                    <td className="text-base-content/70">
                      {review.restaurantName}
                    </td>

                    <td className="text-base-content/60">
                      {new Date(review.date).toLocaleDateString()}
                    </td>

                    <td>
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            navigate(`/editReview/${review._id}`)
                          }
                          className="btn btn-sm btn-primary"
                        >
                          <FaEdit /> Edit
                        </button>

                        <button
                          onClick={() => {
                            setSelectedReview(review);
                            setIsModalOpen(true);
                          }}
                          className="btn btn-sm btn-outline btn-error"
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isModalOpen && selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-base-100 rounded-box shadow-xl w-full max-w-md p-6">
            <h3 className="text-xl font-semibold text-base-content mb-3">
              Confirm Deletion
            </h3>

            <p className="text-base-content/70 mb-6">
              Are you sure you want to delete the review for{" "}
              <span className="font-semibold">
                {selectedReview.foodName}
              </span>
              ?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(selectedReview._id)}
                className="btn btn-error"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
