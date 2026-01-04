import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { MdOutlineRateReview, MdOutlineReviews } from "react-icons/md";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  /* =========================
     THEME TOGGLE
     ========================= */
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "foodnet-light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev =>
      prev === "foodnet-light" ? "dark" : "foodnet-light"
    );
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* ================= CONTENT ================= */}
        <div className="drawer-content flex flex-col">
          {/* ================= DASHBOARD NAVBAR ================= */}
          <nav className="navbar w-full bg-base-100/80 border-b border-base-200 px-6">
            {/* LEFT */}
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              ☰
            </label>

            <div className="px-4 font-semibold text-base-content">
              Dashboard
            </div>

            {/* RIGHT SIDE (Theme + User only) */}
            <div className="ml-auto flex items-center gap-3 pr-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle"
                aria-label="Toggle Theme"
              >
                {theme === "foodnet-light" ? <FaMoon /> : <FaSun />}
              </button>

              {/* User Avatar */}
              <div
                className="tooltip tooltip-bottom "
                data-tip={user?.displayName || "User"}
              >
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-2xl" />
                )}
              </div>
            </div>
          </nav>

          {/* ================= PAGE CONTENT ================= */}
          <Outlet />
        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="drawer-side is-drawer-close:overflow-visible">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            <ul className="menu w-full grow">
              {/* Home */}
              <li>
                <NavLink
                  to={"/"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </NavLink>
              </li>

              {/* My Reviews */}
              <li>
                <NavLink
                  to={"/dashboard/my-reviews"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Reviews"
                >
                  <MdOutlineRateReview />
                  <span className="is-drawer-close:hidden">My Reviews</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/add-reviews"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add Reviews"
                >
                  <MdOutlineReviews />
                  <span className="is-drawer-close:hidden">Add Reviews</span>
                </NavLink>
              </li>

              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
