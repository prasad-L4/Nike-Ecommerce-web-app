import React, { useState } from "react";

import { SiNike } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping, FaDisplay } from "react-icons/fa6";
import AfterCart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart/Cart";

const Navbar = ({ ModalisOPen }) => {
  const { cartList, cartCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const CartIsClosed = () => useSelector((state) => state.cart.value);

  const [isOpen, setisOpen] = useState(false);

  const handleCartClick = () => {
    setisOpen(true);
  };
  const handleCartClosed = () => {
    setisOpen(false);
  };
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
            <button
              className="hover:scale-125 transition-all duration-300 flex justify-center items-center"
              onClick={handleCartClick}
            >
              <FaCartShopping />{
                cartList.length>0&& <span className="text-[10px] mt-[-18px] bg-green-600 text-white rounded-[50%] object-cover w-4">
                {cartList.length}
              </span>
              }
             
            </button>
            {isOpen ? (
              <Cart handleCartClosed={handleCartClosed} isOpen={isOpen} />
            ) : null}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
