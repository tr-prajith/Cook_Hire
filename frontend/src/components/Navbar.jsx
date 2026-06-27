import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-10 py-5 flex items-center justify-between bg-[#F9F8F3] border-b border-[#E8E3DA]">
      <h2 className="text-4xl font-bold cursor-pointer transition-opacity duration-300 hover:opacity-80">
        <span className="text-[#114232]">Cook</span>
        <span className="text-[#EA7317]">Hire</span>
      </h2>

      <div className="hidden md:flex items-center gap-9">
        <a
          href="#cooks"
          className="text-gray-900 font-medium transition-colors duration-300 hover:text-[#EA7317]"
        >
          Find a Cook
        </a>

        <a
          href="#cuisines"
          className="text-gray-900 font-medium transition-colors duration-300 hover:text-[#EA7317]"
        >
          Cuisines
        </a>

        <a
          href="#how"
          className="text-gray-900 font-medium transition-colors duration-300 hover:text-[#EA7317]"
        >
          How it Works
        </a>

        <Link
          to="/cook-registration"
          className="text-gray-900 font-medium transition-colors duration-300 hover:text-[#EA7317]"
        >
          For Cooks
        </Link>

        <Link
          to="/all-cooks"
          className="bg-[#EA7317] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-xl"
        >
          Find a Cook
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;