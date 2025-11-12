import React from "react";
import IconButtons from "./IconButtons";
import { NavLink } from "react-router";

const Navbar = () => {
    const links = <>
            <li><NavLink to={"/addReview"}>Add-Review</NavLink></li>
            <li><NavLink to={"/myReview"}>My-Review</NavLink></li>
    </>
  return (
    <>
      <div className="navbar bg-[#EFE9E3] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#EFE9E3] rounded-box z-1 mt-3 w-52 p-2 shadow text-[clamp(12px,2vw,16px)]"
            >
                {links}
            </ul>
          </div>
          <IconButtons></IconButtons>
          <a className="p-3 font-bold text-[clamp(16px,4vw,22px)]">Food🕸net</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-[clamp(14px,2vw,16px)]">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#C9B59C] border-none max-sm:py-1 max-sm:p-2 text-[clamp(12px,2vw,16px)]">Login</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
