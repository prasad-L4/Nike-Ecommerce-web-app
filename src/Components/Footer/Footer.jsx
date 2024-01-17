import React, { useState } from "react";
import { footer } from "../Datas/Datas";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-wrap w-[100%] h-[auto] justify-around  bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 mt-[60px]">
          <div className=" text-[18px] text-white leading-10" >
            <h2>FIND A STORE</h2>
            <h2>BECOME A MEMBER</h2>
            <h2>Send Us Feedback</h2>
          </div>
          <div className="flex flex-col text-white mt-3 leading-10">
            <h2 className="text-[20px]  font-bold">GET HELP</h2>

            <a href="" className=" text-[13px]">Send Us Feedback</a>
            <a className=" text-[13px]" href=""> GET HELP</a>
            <a className=" text-[13px]" href="">Order Status</a>
            <a className=" text-[13px]" href="">Delivery</a>
            <a className="text-[13px]" href="">Returns</a>
            <a className="text-[13px]" href="">Payment Options</a>
            <a className=" text-[13px]" href="">Contact Us On Nike.com Inquiries</a>
            <a className=" text-[13px]" href="">Contact Us On All Other Inquiries</a>
          </div>
          <div className="flex  flex-col text-white mt-3 leading-10 ">
            <h2 className="text-[20px]  font-bold">ABOUT NIKE</h2>
            <a className=" text-[13px]"  href="">News</a>
            <a className=" text-[13px]"  href="">Careers</a>
            <a className=" text-[13px]"  href="">Investors</a>
            <a className=" text-[13px]"  href="">Sustainability</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
