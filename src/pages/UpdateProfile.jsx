import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";


const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

 const handleUpdate = (e) => {
  e.preventDefault();
  setLoading(true);

  updateUserProfile( { displayName, photoURL })
    .then(() => {
      navigate("/myProfile");
    })
    .catch(() => {
      
    })
    .finally(() => {
      setLoading(false);
    });
};


  return (
    <section className="min-h-screen bg-base-300  mx-auto p-5 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-5">

          <div>
            <label className="block mb-2 font-semibold">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered w-full bg-[#E1D0B3]"
              required
            />
          </div>


          <div>
            <label className="block mb-2 font-semibold">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Paste your profile image URL"
              className="input input-bordered w-full bg-[#E1D0B3]"
            />
          </div>

          {photoURL && (
            <div className="flex justify-center mt-4">
              <img
                src={photoURL}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border-4 border-primary"
              />
            </div>
          )}

          <div className="flex flex-col gap-3 mt-6">
            <button
              type="submit"
              className={`btn btn-primary w-full ${loading && "loading"}`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
            <button
              type="button"
              className="btn btn-outline w-full"
              onClick={() => navigate("/myProfile")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;