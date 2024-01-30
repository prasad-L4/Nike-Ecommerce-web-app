
import  { useState } from "react";
import { toprateslaes } from "../Datas/Datas";
import { FaStar } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Reducer/Reducer";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";



const Toprated = () => {
  const [topProducts, setTopProducts] = useState(toprateslaes);
  const {cartList,cartCount,cartAlert}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  return (
    <>
      <section>
        <div className="flex mt-[100px] flex-col justify-center items-center text-[30px] font-extrabold font-mono">
          <h2>TOP RATED PRODUCTS</h2>
          <div className="flex justify-center items-center align-middle gap-10 flex-wrap">
            {topProducts.map((topproduct, index) => (
              <div
                className={`flex flex-col pt-7 sm:w-[300px] sm:h-[465px] w-[90%] h-[520px] hover:scale-110 transition-all  duration-700  mt-11 shadow-md font-light rounded-md bg-gradient-to-b ${topproduct.color} ${topproduct.shadow} `}
              >
                     <div className="mt-  flex justify-center  items-center align-middle">
                  <img
                    className="card-img sm:w-[70%] w-[60%] transition-transform duration-700 ease-in-out transform -rotate-[25deg] hover:rotate-0"
                    src={topproduct.img}
                    alt=""
                  />
                </div>
                <h1 className="text-[25px] mt-14 text-white text-center">
                  {topproduct.title}
                </h1>
                <p className="text-[20px] mt-2 text-white text-center">
                  {topproduct.text}
                </p>
                <div>
                  <h3 className="text-[25px] mt-3 text-white text-center">
                    ${topproduct.price}
                  </h3>
                  <div className="flex justify-center mt-3 text-white text-[20px] gap-2">
                    <span className="mt-1">
                      <FaStar />
                    </span>
                    <h4>{topproduct.rating}</h4>
                  </div>      
                </div>
                <div className="card-btn flex justify-center mt-3 gap-3">
                  
                  <button onClick={()=>dispatch(addToCart(topproduct))}>
                    <IoBagHandle />
                  </button>
             
                  <button
                    className={`bg-white text-[20px] w-[90px] rounded-md hover:bg-gradient-to-b ${topproduct.color} ${topproduct.shadow} hover:text-white`}
                    onClick={()=>dispatch(addToCart(topproduct))} >
                    BUY NOW
                  </button>
                </div>
           
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Toprated;
