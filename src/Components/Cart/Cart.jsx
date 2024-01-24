import React, { useState } from "react";
import Modal from "./Modal";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Cart = ({ handleCartClosed, isOpen }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-end items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-[50%] my-6 w-[100%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative float-end h-[100vh] flex flex-col md:w-[100%]  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <button
                    onClick={handleCartClosed}
                    className="text-3xl font-semibold flex"
                  >
                    <MdOutlineKeyboardDoubleArrowLeft />{" "}
                    <span className="text-[20px] mt-[-3px]">Cart</span>
                  </button>
                  <button
                    className=" w-2 text-[27px]  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCartClosed}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="  text-center align-middle  md:flex flex-wrap flex-grow-1 justify-around w-[100%] md:h-[80px] rounded-md shadow-md bg-white items-center ">
                    <img
                      className="md:w-[100px] w-[100%] h-[50px]"
                      src="https://ludic.life/products/verdant-accent-off-white?variant=46946791915824&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic"
                      alt=""
                    />
                    <div className="flex  flex-col">
                      <h2>title</h2>
                      <h4>sub-title</h4>
                      <div className="flex justify-center">
                        <button>-</button>
                        <h2>count</h2>
                        <button>+</button>
                      </div>
                    </div>
                    <div>
                      <h2>rate</h2>
                      <button>delete</button>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center flex-col justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-blue-950  w-[100%] text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    check Out <span>0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Cart;
