import React from "react";
import star from "../assets/image/ic-star.svg";
import { wa } from "../data";
import { Link, useLocation } from "react-router-dom";

function CardProduct({ titleContent, titleCard, desc, image, wa }) {
  const numStars = 5;
  const location = useLocation();
  
  let styleBgGradient;
  let styleButton;
  let styleImage;

  switch (titleContent) {
    case "productsBibit":
      styleBgGradient = "linear-gradient(150deg, #A7BC2E 45%, #FFFFFF 45%)";
      styleButton = "py-2 px-3 rounded-lg bg-[#A7BC2E] transition duration-[400ms] ease-in-out hover:bg-[#94A729FF]";
      styleImage =
        "custom-box-shadow-green size-[120px] bg-[#F9F9F6FF] rounded-full sm:size-[130px]";
      break;
    case "productsDurian":
      styleBgGradient = "linear-gradient(150deg, #FCC52D 45%, #FFFFFF 45%)";
      styleButton = "py-2 px-3 rounded-lg bg-darkYellow transition duration-[400ms] ease-in-out hover:bg-[#E5B32BFF]";
      styleImage = "custom-box-shadow size-[120px] bg-[#F9F9F6FF] rounded-full";
      break;
    case "productsOlahan":
      styleBgGradient = "linear-gradient(150deg, #FFE700 45%, #ffffff 45%)";
      styleButton = "py-2 px-3 rounded-lg bg-[#FFE700] transition duration-[400ms] ease-in-out hover:bg-[#E2CC05FF]";
      styleImage =
        "custom-box-shadow-lightYellow size-[120px] bg-[#F9F9F6FF] rounded-full";
      break;
    default:
      break;
  }

  return (
    <>
      <div
        className="card-product flex flex-col gap-y-4 p-4 custom-shadow bg-gradient-to-r from-darkYellow to-white rounded-xl w-[300px] md:w-[320px] transition duration-[400ms] ease-in-out hover:brightness-90 "
        style={{ background: styleBgGradient }}
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{titleCard}</h2>
          <p className="text-md max-w-[300px] line-clamp-3">{desc}</p>
        </div>
        <div className="flex justify-center">
          <img src={image} className={`${styleImage}`} alt="img-card-product" />
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-x-1">
            {Array.from({ length: numStars }).map((_, index) => (
              <img src={star} key={index} className="size-[14px]" alt="ic-star" />
            ))}
          </div>

          {
            location.pathname === "/products" ? (
              <Link to="/mitra">
                <div className={styleButton}>
                  <p
                    className="text-primary font-semibold transition duration-[400ms] ease-in-out"
                  >
                    Hubungi Mitra
                  </p>
                </div>
              </Link> 
            ) : (
              <a href={ wa } target="_blank" rel="noopener noreferrer">
                <div className={styleButton}>
                  <p className="text-primary font-semibold">Whatsapp</p>
                </div>
              </a>
            )
          }

          {/* <Link to="/mitra">
            <div className={styleButton}>
              <p
                className="text-primary font-semibold"
              >
                Hubungi Mitra
              </p>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default CardProduct;
