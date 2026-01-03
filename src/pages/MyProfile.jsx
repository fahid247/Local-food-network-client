import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

const MyProfile = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  // Demo / fallback data (replace later with DB data)
  const stats = {
    reviews: 12,
    likes: 86,
    joined: "March 2024",
    role: "Food Enthusiast",
    location: "Dhaka",
    bio:
      "Passionate about discovering local flavors, sharing food experiences, and connecting with fellow food lovers.",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center bg-base-200 px-4">
        <h2 className="text-3xl font-bold mb-4">You are not logged in</h2>
        <button onClick={() => navigate("/login")} className="btn btn-primary">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-base-200 via-base-300 to-base-200 py-20 px-4">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center mb-16"
      >
        <span className="text-primary">My</span>{" "}
        <span className="text-base-content">Profile</span>
      </motion.h2>

      {/* Profile Card */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Left Profile Card */}
        <div className="md:col-span-1 bg-base-100 backdrop-blur-xl shadow-2xl rounded-3xl p-8 text-center">
          
          {/* Avatar */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="flex justify-center mb-6"
          >
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl"
            />
          </motion.div>

          <h3 className="text-2xl font-bold">{user.displayName}</h3>
          <p className="text-sm text-base-content/70">{user.email}</p>

          <span className="inline-block mt-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {stats.role}
          </span>

          <button
            onClick={() => navigate("/updateProfile")}
            className="btn btn-primary w-full mt-8"
          >
            Edit Profile
          </button>
        </div>

        {/* Right Info Section */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Reviews", value: stats.reviews },
              { label: "Likes", value: stats.likes },
              { label: "Joined", value: stats.joined },
              { label: "Location", value: stats.location },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-base-100 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg"
              >
                <h4 className="text-2xl font-extrabold text-primary">
                  {item.value}
                </h4>
                <p className="text-sm text-base-content/70 mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-base-100 backdrop-blur-xl rounded-2xl p-8 shadow-xl"
          >
            <h4 className="text-xl font-bold mb-4">About Me</h4>
            <p className="text-base-content/80 leading-relaxed">
              {stats.bio}
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div className="flex flex-wrap gap-4">
            <button onClick={()=>{navigate("/myReview")} } className="btn btn-outline border-none bg-primary">My Reviews</button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MyProfile;
