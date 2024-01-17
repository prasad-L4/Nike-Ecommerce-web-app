import React from "react";

import { SiNike } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
      <header className="w-[100%] h-12 fixed z-50 opacity-100  items-center  bg-white shadow-md">
        <nav className=" flex justify-between  px-6">
          <div className="text-[45px] ">
            <SiNike />
          </div>
          <div className=" flex  justify-around gap-5 ">
            <button className="hover:scale-125 transition-all  duration-300 ">
              <CiSearch />
            </button>
            <button className="hover:scale-125 transition-all duration-300">
              <FaHeart />
            </button>
            <button className="hover:scale-125 transition-all duration-300">
            <FaCartShopping />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
