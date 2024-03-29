import React, { useState } from "react";
import { popularsales, toprateslaes } from "../Datas/Datas";
import { FaStar } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer/Reducer";
import "./Cards.css";

const Cards = () => {
  const [products, setproducts] = useState(popularsales);
  const dispatch=useDispatch()

  return (
    <>
      <section>
        <div className="flex mt-5 flex-col justify-center items-center text-[30px] font-extrabold font-mono">
          <h2>POPULAR SALES</h2>
          <div className="flex justify-center items-center align-middle gap-10 flex-wrap">
            {products.map((product, index) => (
              <div
                className={`flex flex-col pt-7 sm:w-[420px] sm:h-[465px] w-[90%] h-[485px] hover:scale-110 transition-all  duration-700  mt-11 shadow-md font-light rounded-md bg-gradient-to-b ${product.color} ${product.shadow} `}
              >
                <h1 className="text-[25px] text-white text-center">
                  {product.title}
                </h1>
                <p className="text-[20px] mt-2 text-white text-center">
                  {product.text}
                </p>
                <div>
                  <h3 className="text-[25px] mt-3 text-white text-center">
                    ${product.price}
                  </h3>
                  <div className="flex justify-center mt-3 text-white text-[20px] gap-2">
                    <span className="mt-1">
                      <FaStar />
                    </span>
                    <h4>{product.rating}</h4>
                  </div>
                </div>
                <div className="card-btn flex justify-center mt-3 gap-3">
                  <button onClick={()=>dispatch(addToCart(product))}>
                    <IoBagHandle />
                  </button>
                  <button
                    className={`bg-white text-[20px] w-[90px] rounded-md hover:bg-gradient-to-b ${product.color} ${product.shadow} hover:text-white`}
                    onClick={()=>dispatch(addToCart(product))} >
                    BUY NOW
                  </button>
                </div>
                <div className="mt-8  flex justify-center  items-center align-middle">
                  <img
                    className="card-img sm:w-[70%] w-[65%] transition-transform duration-700 ease-in-out transform -rotate-[25deg] hover:rotate-0"
                    src={product.img}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
      
    </>
  );
};

export default Cards;
