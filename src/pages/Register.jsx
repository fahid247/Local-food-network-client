import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import img from "../assets/Screenshot 2026-01-03 223526.png";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
      background: "#fff7e6",
      color: "#f59e0b",
      timer: 1500,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      background: "#fff7e6",
      color: "#dc2626",
      confirmButtonColor: "#f59e0b",
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    setPasswordError("");

    // Create user
    createUser(email, password)
      .then(() => {
        // Update profile with name and photo
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            showSuccessAlert("Successfully Signed Up!");
            navigate(location.state ? location.state : "/");
          })
          .catch((error) => showErrorAlert(error.message));
      })
      .catch((error) => showErrorAlert(error.message));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left: Image */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-base-100 p-3">
        <motion.img
          src={img}
          alt="Register Banner"
          className="max-h-[92vh] rounded-2xl mx-auto"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Right: Form */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-base-100 p-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2 text-primary">Hello!</h1>
          <h2 className="text-4xl font-bold mb-3 text-primary">Create Account</h2>
          <p className="text-gray-500 mb-8">
            Join Food🕸Net and start sharing your favorite meals
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}

            <button className="btn btn-primary w-full mt-2">Sign Up</button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
