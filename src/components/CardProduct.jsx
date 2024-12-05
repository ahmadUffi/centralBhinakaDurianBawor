import React from "react";
import star from "../assets/image/ic-star.svg";

function CardProduct({ titleContent, titleCard, desc, image }) {
  const numStars = 5;
  let styleBgGradient;
  let buttonColor;

  switch (titleContent) {
    case "productsBibit":
      styleBgGradient = "linear-gradient(150deg, #A7BC2E 45%, #FFFFFF 45%)";
      buttonColor = "bg-[#A7BC2E]";
      break;
    case "productsDurian":
      styleBgGradient = "linear-gradient(150deg, #FCC52D 45%, #FFFFFF 45%)";
      buttonColor = "bg-darkYellow";
      break;
    case "productsOlahan":
      styleBgGradient = "linear-gradient(150deg, #FFE700 45%, #ffffff 45%)";
      buttonColor = "bg-[#FFE700]";
      break;
    default:
      break;
  }
  console.log(titleContent);
  return (
    <>
      <div
        className="card-product flex flex-col gap-y-4 p-4 custom-shadow bg-gradient-to-r from-darkYellow to-white rounded-xl w-[300px] md:w-[320px]  "
        style={{ background: styleBgGradient }} // Edit Width Card 03/12/24
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{titleCard}</h2>
          <p className={`text-md max-w-[300px]`}>{desc}</p>
        </div>
        <div className="flex justify-center">
          <img
            src={image}
            className={`size-[100px] ${
              titleContent !== "productBibit"
                ? "custom-box-shadow"
                : "custom-box-shadow-green"
            } rounded-full`}
            alt="img-card-product"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1">
            {Array.from({ length: numStars }).map((_, index) => (
              <img src={star} key={index} className="size-4" alt="ic-star" />
            ))}
          </div>
          <div className={`py-2 px-3 ${buttonColor} rounded-lg`}>
            <a
              href="https://example.com"
              className="text-primary font-semibold"
              target="_blank"
            >
              Hubungi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
