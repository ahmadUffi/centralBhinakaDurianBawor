import React from "react";
import star from "../assets/image/ic-star.svg";
import { wa } from "../data";

function CardProduct({ titleContent, titleCard, desc, image }) {
  const numStars = 5;
  let styleBgGradient;
  let styleButton;
  let styleImage;

  switch (titleContent) {
    case "productsBibit":
      styleBgGradient = "linear-gradient(150deg, #A7BC2E 45%, #FFFFFF 45%)";
      styleButton = "py-2 px-3 rounded-lg bg-[#A7BC2E]";
      styleImage = "custom-box-shadow-green size-[120px] bg-[#F9F9F6FF] rounded-full sm:size-[130px]";
      break;
    case "productsDurian":
      styleBgGradient = "linear-gradient(150deg, #FCC52D 45%, #FFFFFF 45%)";
      styleButton = "py-2 px-3 rounded-lg bg-darkYellow";
      styleImage = "custom-box-shadow size-[120px] bg-[#F9F9F6FF] rounded-full";
      break;
    case "productsOlahan":
      styleBgGradient = "linear-gradient(150deg, #FFE700 45%, #ffffff 45%)";
      styleButton = "py-2 px-3 rounded-lg bg-[#FFE700]";
      styleImage = "custom-box-shadow-lightYellow size-[120px] bg-[#F9F9F6FF] rounded-full";
      break;
    default:
      break;
  }
  console.log(titleContent);
  return (
    <>
      <div className="card-product flex flex-col gap-y-8 p-4  custom-shadow bg-gradient-to-r from-darkYellow to-white rounded-xl sm:w-[44%] lg:w-[28%]" style={{ background: styleBgGradient }}>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold">{titleCard}</h2>
          <p className="text-md max-w-[300px]">{desc}</p>
        </div>
        <div className="flex justify-center">
          <img src={image} className={`${styleImage}`} alt="img-card-product" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1">
            {Array.from({ length: numStars }).map((_, index) => (
              <img src={star} key={index} className="size-4" alt="ic-star" />
            ))}
          </div>
          <div className={styleButton}>
            <a href={`${wa}6289603014813`} className="text-primary font-semibold" target="_blank">
              Hubungi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
