import React from "react";
import { Home, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const IconButtons = () => {
  return (
    <div className="flex items-center justify-around min-[400px]:w-[110px] w-[70px] h-7 md:h-8 xl:h-10 bg-[#C9B59C] rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.35),5px_10px_15px_rgba(0,73,144,0.5)] transition-all duration-500 hover:min-[400px]:w-[130px] hover:w-20">
      <Link to={"/"} className="w-10 h-10 flex items-center justify-center rounded-full text-white transition-transform duration-300 hover:-translate-y-1">
        <Home className="w-3 md:w-4 xl:w-5 h-3.5 md:h-4 xl:h-5" />
      </Link>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-white transition-transform duration-300 hover:-translate-y-1">
        <Search className="w-3 md:w-4 xl:w-5 h-3.5 md:h-4 xl:h-5" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-white transition-transform duration-300 hover:-translate-y-1">
        <User className="w-3 md:w-4 xl:w-5 h-3.5 md:h-4 xl:h-5" />
      </button>
    </div>
  );
};

export default IconButtons;
