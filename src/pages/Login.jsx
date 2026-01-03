import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Login = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
      background: "#fff7e6",
      color: "#f59e0b", // warm orange text
      timer: 2000,
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
      color: "#dc2626", // red
      confirmButtonColor: "#f59e0b",
    });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        showSuccessAlert("Logged in with Google!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => showErrorAlert(error.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

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

    createUser(email, password)
      .then(() => {
        showSuccessAlert("Login Successful!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => showErrorAlert(error.message));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left: Form */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex items-center justify-center bg-base-100 p-6"
      >
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2 text-primary">Hello,</h1>
          <h2 className="text-4xl font-bold mb-3 text-primary">Welcome Back</h2>
          <p className="text-gray-500 mb-8">Hey, welcome back to your special place</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}

            <div className="flex justify-between text-sm mb-4">
              <Link to="/forgetPassword" className="text-primary hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button className="btn btn-primary w-full">Sign In</button>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="btn w-full mt-4 bg-white text-black border-[#cfcbcb] flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="M0 0H512V512H0" fill="#fff" />
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Right: Image */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-base-100 p-3">
        <img
          src="https://i.ibb.co/tTdG8G8q/Screenshot-2026-01-03-223526.png"
          alt="Login Banner"
          className="max-h-[92vh] rounded-2xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Login;
