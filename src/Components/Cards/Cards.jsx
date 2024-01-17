import React from "react";

const Cards = () => {
    const [p, setp] = useState(second)
  return (
    <>
      <section>
        <div className="flex justify-center items-center text-[30px] font-extrabold font-mono">
          <h2>POPULAR SALES</h2>
          <div className="flex justify-center align-middle flex-wrap">
            <div className={`flex shadow-md rounded-md  bg-gradient-to-b ${color} ${shadow}`}>
              <h1>title</h1>
              <p>dis</p>
              <div>
                <button>cart</button>
                <button>bynow</button>
              </div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
