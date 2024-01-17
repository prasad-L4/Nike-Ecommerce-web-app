import { useState } from "react";
import hero from "../../Images/hero.png";
import "./Header.css";
import { headerimage, socialbuttons } from "../Datas/Datas";

const Header = () => {
  const [icons, setIcons] = useState(socialbuttons);
  const [cards, setcards] = useState(headerimage);
  return (
    <>
      <main>
        <div className="w-[100%] relative  items-center align-middle flex justify-center z-10   h-[650px] ">
          <div className="clipped-shape flex mt-[-150px]   justify-center w-64 h-64 bg-blue-500">
            <h2 className="text-white text-[30px] sm:text-[40px] flex justify-center text-center pt-14 font-mono font-extrabold ">
              Nike Emporium: Step Into Excellence,Elevate Your Style
            </h2>
            <div className=" hidden sm:flex flex-col gap-8 justify-center mt-8 align-middle">
              {icons.map((icon, index) => (
                <button className="text-white sm:text-[30px] hover:scale-125 transition-all duration-300">
                  {icon.icon}
                </button>
              ))}
            </div>
          </div>
          <div className="cards flex sm:flex-col z-20 transform absolute md:left-10 top-[40%] md:mt-[-10px] sm:left-0 shadow-md mt-[-65px] sm:mt-28 gap-3 ">
            {cards.map((card, index) => (
              <div className="z-30">
                <img
                  className="md:w-[100px] md:h-[100px]  w-[70px] h-[70px]  shadow-md rounded-md z-20 hover:scale-125 transition-all  duration-300 "
                  src={card.image}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="absolute  sm:mt-[120px] mt-[300px] flex justify-center items-center ">
            <img
              className="sm:w-[80%] md:w-[90%] w-[70%] sm:h-[360px] transition-transform duration-700 ease-in-out transform -rotate-[25deg] hover:rotate-0"
              src={hero}
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
