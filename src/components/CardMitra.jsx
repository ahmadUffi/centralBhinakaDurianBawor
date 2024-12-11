import React from "react";
import { Link } from "react-router-dom";

function CardMitra({ image, title, desc, isOdd, link = false }) {
  const classImage = `flex justify-center w-full sm:w-[90%] md:w-[80%] lg:w-1/2 ${
    isOdd ? "lg:order-2" : "lg:order-1"
  }`;

  return (
    <>
      <Link to={link ? link : null}>
        <div className="p-6 custom-shadow rounded-2xl mb- lg:p-12 scale-90">
          <div className="flex flex-col justify-center items-center gap-y-4 lg:flex-row gap-x-10">
            <div className={` ${classImage} `}>
              <img
                src={image}
                className="md:w-[400px] w-[300px] rounded-lg shadow-xl"
                alt="Mitra_1"
              />
            </div>
            <div className="flex flex-col gap-y-4 lg:order-1 lg:w-1/2 lg:gap-y-8">
              <h1 className="text-2xl font-bold md:text-center lg:text-5xl lg:text-left">
                {title}
              </h1>
              <p className="text-xl text-justify lg:text-left">{desc}</p>
              <div className="flex justify-center lg:justify-start">
                <button className="w-full p-2 bg-darkYellow text-stone-900 font-semibold rounded-[10px] transition duration-[400ms] ease-in-out hover:bg-yellow-500 sm:w-[40%] lg:w-max lg:px-5 xl:text-md">
                  Pelajari lebih lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardMitra;
