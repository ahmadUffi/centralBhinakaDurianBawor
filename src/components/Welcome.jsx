import React from "react";
import bgOverlayLeft from "../assets/image/bgOverlayleft.png";

const Welcome = ({ bgOverlayRight, name, description }) => {
  return (
    <div
      className={`welcome h-[100vh] w-full bg-cover bg-center relative overflow-hidden`}
    >
      <img
        src={bgOverlayLeft}
        alt="bg"
        className="absolute top-0 lg:bottom-0 lg:top-auto left-0 lg:w-[40%] md:w-[50%] w-[90%] -scale-y-100 lg:scale-y-100"
      />
      <img
        src={bgOverlayRight}
        alt="bg"
        className="absolute bottom-0 right-0 lg:w-[30%] md:w-[50%] w-[60%] "
      />
      <div className="wrap mt-[25vh] relative z-10 text-center lg:w-[50%] md:w-[80%] md:ml-[10dvw] p-1">
        <h1 className="md:text-[98px] text-[58px] font-bold">Welcome</h1>
        <h2 className="md:text-[50px] text-[28px] font-semibold mt-[-20px] uppercase">
          TO {name}
        </h2>
        <p>{description}</p>
        <button className="py-2 px-6 bg-darkYellow rounded-full font-bold mt-3">
          Lebih Banyak
        </button>
      </div>
    </div>
  );
};

export default Welcome;
