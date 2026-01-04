import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);

  /* =========================
     THEME TOGGLE (DEFAULT DARK)
     ========================= */
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "foodnet-light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "foodnet-light" ? "dark" : "foodnet-light"));
  };

  /* =========================
     LOGOUT
     ========================= */
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
      background: "#fff7e6", // soft yellow background
      color: "#f59e0b",       // warm orange text
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

  const handleLogOut = () => {
    signOutUser()
      .then(() => showSuccessAlert("Logged out successfully"))
      .catch((error) => showErrorAlert(error.message));
  };

  /* =========================
     NAVLINK STYLE
     ========================= */
  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition-all duration-300 ${
      isActive
        ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary"
        : "text-base-content hover:text-primary"
    }`;

  /* =========================
     LINKS
     ========================= */
  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className={navLinkStyle}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/myProfile" className={navLinkStyle}>
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/complainBox" className={navLinkStyle}>
          Complain Box
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={navLinkStyle}>
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-300 shadow-sm"
    >
      <div className="navbar mx-auto sm:px-8">
        {/* ================= LEFT ================= */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="ml-2">
            <h1 className="text-[clamp(16px,4vw,28px)] font-extrabold tracking-wide bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Food🕸Net
            </h1>
          </Link>
        </div>

        {/* ================= CENTER ================= */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">{links}</ul>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="navbar-end max-[450px]:gap-1 gap-3 flex-nowrap">
          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-xl"
            aria-label="Toggle Dark Mode"
          >
            {theme === "foodnet-light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
          </motion.button>

          {/* User Area */}
          {user ? (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="tooltip tooltip-bottom shrink-0"
                data-tip={user.displayName || "User"}
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-9 h-9 shrink-0 rounded-full border-2 border-primary object-cover"
                  />
                ) : (
                  <FaUserCircle size={34} className="shrink-0 min-w-[34px]" />
                )}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogOut}
                className="btn btn-sm btn-primary text-primary-content shrink-0"
              >
                Log Out
              </motion.button>
            </>
          ) : (
            <>
              <FaUserCircle size={30} className="shrink-0 min-w-[30px]" />
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-sm btn-primary text-primary-content shrink-0"
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    "Login"
                  )}
                </motion.button>
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
