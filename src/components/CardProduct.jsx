import React from 'react'
import star from "../assets/image/ic-star.svg"

function CardProduct({ titleContent, titleCard, desc, image }) {
  const numStars = 5;
  let styleBgGradient;
  let buttonColor;

  switch (titleContent) {
    case "BIBIT":
        styleBgGradient = "linear-gradient(150deg, #A7BC2E 45%, #FFFFFF 45%)";
        buttonColor = "bg-[#A7BC2E]";
      break;
    case "DURIAN":
        styleBgGradient = "linear-gradient(150deg, #FCC52D 45%, #FFFFFF 45%)";
        buttonColor = "bg-darkYellow";
      break;
    case "OLAHAN PRODUK":
        styleBgGradient = "linear-gradient(150deg, #FFE700 45%, #ffffff 45%)";
        buttonColor = "bg-[#FFE700]"
      break;
    default:
      break;
  }

  return (
    <>
      <div 
        className="card-product flex flex-col gap-y-4 p-4 custom-shadow bg-gradient-to-r from-darkYellow to-white rounded-xl sm:w-[48%] lg:w-[23%]" style={{ background: styleBgGradient }}
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">
            { titleCard }
          </h2>
          <p className={`text-md max-w-[300px]`}>
            { desc }
          </p>
        </div>
        <div className="flex justify-center">
          <img src={ image } className={`size-[100px] ${titleContent !== "BIBIT" ? "custom-box-shadow" : "custom-box-shadow-green"} rounded-full`} alt="img-card-product" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1">
            {
              Array.from({ length: numStars }).map((_, index) => (
                <img src={ star } key={ index } className='size-4' alt="ic-star" />
              ))
            }
          </div>
          <div className={`py-2 px-3 ${ buttonColor } rounded-lg`}>
            <a href="https://example.com" className='text-primary font-semibold' target="_blank">Hubungi</a>
          </div>
        </div>
      </div>

      {/* ===== Kode 2 ====== */}
      {/* <div 
        className="card-product flex flex-col gap-y-4 p-4 custom-shadow bg-gradient-to-r from-darkYellow to-white rounded-xl max-w-[400px] sm:max-w-[250px]" style={{ background: 'linear-gradient(150deg, #FCC52D 50%, #FFFFFF 50%)' }}
      >
        <h2 className="text-xl font-semibold text-center">
          { titleCard }
        </h2>
        <div className="flex justify-center">
          <img src={ image } className='size-[100px] custom-box-shadow rounded-full' alt="img-card-product" />
        </div>
        <p className="text-center text-md max-w-[300px] lg:max-w-xl sm:max-w-sm">
          { desc }
        </p>
        <div className="flex justify-start gap-x-1">
          {
            Array.from({ length: numStars }).map((_, index) => (
              <img src={ star } key={ index } className='size-4' alt="ic-star" />
            ))
          }
        </div>
      </div> */}

      {/* ==== Kode 3 ==== */}
      {/* <div className="card-product flex flex-col gap-y-4 p-6 custom-shadow bg-gradient-to-r from-darkYellow via-orange-400/90 to-darkYellow rounded-xl">
        <div className="">
          <img src={ image } className='scale-95' alt="" />
        </div>
        <h2 className="text-2xl font-semibold text-center">
          { titleCard }
        </h2>
        <p className="text-center text-lg">
          { desc }
        </p>
      </div> */}
    </>
  )
}

export default CardProduct