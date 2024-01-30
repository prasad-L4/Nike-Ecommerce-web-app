import React, { useState } from "react";
import Modal from "./Modal";
import emptybag from'../../Images/emptybag.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,deletebtn } from "../Redux/Reducer/Reducer";



const Cart = ({ handleCartClosed, isOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const {cartList,cartCount}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
 const countCart=cartList.find((item)=>item.id===cartList.id)

 const [order, setorder] = useState(false)
  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-end items-center flex overflow-x-hidden h-[100vh] overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-[50%] my-6 h-[100vh] w-[100%]">
              <div className="border-0 rounded-lg shadow-lg relative float-end h-[100vh] overflow-y-auto flex flex-col md:w-[100%]  bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <button
                    onClick={handleCartClosed}
                    className="text-3xl font-semibold flex"
                  >
                    <MdOutlineKeyboardDoubleArrowLeft />{" "}
                    <span className="text-[20px] mt-[-3px]">Cart</span>
                  </button>
                  <button
                    className=" w-2 text-[30px]  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCartClosed}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                {
                  cartList.length>0?     <div className="relative p-6 flex-auto">
                    {
                      cartList.map((data,index)=>((
                        <div key={index} className=" flex flex-col text-center align-middle  md:flex flex-wrap flex-grow-1 justify-center  md:justify-around w-[100%] md:h-[100px] rounded-md shadow-md bg-white items-center ">
                          <div className={`md:w-[140px] w-[80%] h-[74px] flex justify-center items-center rounded-md  bg-gradient-to-b ${data.color} `}>
                          <img
                          className={`md:w-[100px] w-[80%] h-[60px]  bg-gradient-to-b ${data.color}`}
                          src={data.img}
                          alt=""
                        />
                          </div>
                       
                        <div className="flex mt-3 md:mt-0 flex-col ">
                          <h2 className=" text-blue-950">{data.title}</h2>
                          <h4 className="md:mt-0 mt-1 text-gray-600">{data.text}</h4>
                          <div className="flex justify-evenly mt-2 items-center">
                            <button className="bg-blue-950 w-6 h-6 font-bold text-white text-center text-[25px] align-middle pb-1 rounded-sm justify-center flex items-center" onClick={()=>dispatch(decrement(data.id))}>-</button>
                            <h2 className="bg-blue-950 w-6 h-6 font-bold text-white text-center text-[17px] align-middle pb-1 rounded-md justify-center flex items-center">{data.count}</h2>
                            <button className="bg-blue-950 w-6 h-6 font-bold text-white text-center text-[25px] align-middle pb-1 rounded-sm justify-center flex items-center" onClick={()=>dispatch(increment(data.id))}>+</button>
                          </div>
                        </div>
                        <div className="md;mt-0 mt-2 flex flex-col justify-center items-center align-middle">
                          <h2 className="text-blue-950">${data.price}</h2>
                          <button className="text-white bg-blue-950 h-6 w-6 flex text-center align-middle justify-center rounded-md mt-2 mb-2 items-center" onClick={()=>dispatch(deletebtn(data.id))} ><RiDeleteBin6Line /></button>
                        </div>
                      </div>
                      )))
                    }
                 
                </div>  : <div className="flex mt-[6rem] md:mt-0 justify-center items-center">
                  <img className="w-[40%] transition-transform duration-700 ease-in-out transform -rotate-[25deg] hover:rotate-0" src={emptybag} alt="" />
                </div>
                }

            
              
                <div className="flex items-center  flex-col justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-blue-950 md:mt-36  w-[100%] text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    >
                    check Out 
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
