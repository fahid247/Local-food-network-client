import React, { useContext, useEffect, useState } from "react";
import axiosPublic from "../axiosPublic";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const {user} = useContext(AuthContext)


  const loggedInUser = {
    email: `${user.email}`,
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosPublic.get("/reviews");
        const userReviews = res.data.filter(
          (r) => r.email === loggedInUser.email
        );
        setReviews(userReviews);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    };
    fetchReviews();
  },[]);


  const handleDelete = async (id) => {
    try {
      await axiosPublic.delete(`/reviews/${id}`);
      setReviews((prev) => prev.filter((r) => r._id !== id));
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        My Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews added yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-orange-500 text-white uppercase text-sm">
              <tr>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Food Name</th>
                <th className="py-3 px-4">Restaurant</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review._id}
                  className="border-b hover:bg-orange-50 transition"
                >
                  <td className="py-3 px-4">
                    <img
                      src={review.foodImage}
                      alt={review.foodName}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold">
                    {review.foodName}
                  </td>
                  <td className="py-3 px-4">{review.restaurantName}</td>
                  <td className="py-3 px-4 text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 flex justify-center gap-3">
                    <button
                      onClick={() => navigate(`/edit-review/${review._id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedReview(review);
                        setIsModalOpen(true);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {isModalOpen && selectedReview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete the review for{" "}
              <strong>{selectedReview.foodName}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(selectedReview._id)}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
