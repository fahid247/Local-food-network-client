
import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignUp = (e) => {
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

    createUser(email,password)
      .then(() => {
        
        toast.success("Successfull SignUp", {
          style: {
            backgroundColor: "lightgreen",
          },
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(`${error}`, {
          style: {
            backgroundColor: "black",
            color: "bisque",
          },
        });
      });
  };
  return (
    <>
      <section className="min-h-screen bg-[#f9b66a] max-w-[1440px] mx-auto p-5">
        <div className="hero bg-[#f9b66a] min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SignUp now!</h1>
            </div>
            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input bg-[#fffbd1]"
                    placeholder="Enter your name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input bg-[#fffbd1]"
                    placeholder="Email"
                  />
                  <label className="label">Photo-URL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input bg-[#fffbd1]"
                    placeholder="Photo-URL"
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input bg-[#fffbd1]/12 "
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 hover:cursor-pointer top-3 text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16}/>}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                  )}
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition">Sign Up</button>
                  <p>
                    Do you have any account?{" "}
                    <span className="text-blue-800">
                      <Link to={"/login"}>Log In</Link>
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
