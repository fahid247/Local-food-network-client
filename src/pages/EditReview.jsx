import React, { useEffect, useState } from "react";
import axiosPublic from "../axiosPublic";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

const EditReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReview = async () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axiosPublic.put(`/reviews/${id}`, review);
    if (res.data.modifiedCount > 0) {
      toast(" Review updated successfully!");
      navigate("/myReview");
    } else {
      toast("⚠️ No changes were made.");
    }
  } catch (error) {
    console.error("Error updating review:", error);
    toast(" Failed to update review. Try again later.");
  }
};


  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!review) return <p className="text-center mt-10">Review not found.</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">Edit Review</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="foodName"
          value={review.foodName}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
        />
        <input
          name="restaurantName"
          value={review.restaurantName}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
        />
        <input
          name="location"
          value={review.location}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
        />
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={review.rating}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
        />
        <textarea
          name="reviewText"
          value={review.reviewText}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2 h-24 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default EditReview;
