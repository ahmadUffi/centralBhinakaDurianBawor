import React from 'react'
import CardProduct from './CardProduct'
import img_durian from "../assets/image/img-product-durian-1-square.png"

function ContentProduct({ titleContent }) {
  let bgHeaderColor;
  
  switch (titleContent) {
    case "BIBIT":
        bgHeaderColor = "bg-[#A7BC2E]";
      break;
    case "DURIAN":
        bgHeaderColor = "bg-darkYellow";
      break;
    case "OLAHAN PRODUK":
        bgHeaderColor = "bg-[#FFE700]";
      break;
    default:
      break;
  }
  // const BgHeaderColor = titleContent === "BIBIT" ? "bg-[#A7BC2E]" : "bg-darkYellow"

  return (
    <>
      <div className="flex flex-col items-center gap-y-9 w-full">
        <div className={`bg-gradient-to-r ${ bgHeaderColor } w-max px-6 py-2 rounded-xl mt-7`}>
          <h1 className="text-md font-bold">{ titleContent }</h1>
        </div>
        <div className="flex flex-col justify-between gap-y-10 gap-x-5 sm:flex-row sm:flex-wrap sm:justify-center lg:gap-x-28 lg:px-5">
        {/* <div className="flex flex-col justify-between gap-y-10 sm:flex-row sm:gap-x-9 md:gap-x-1 "> */}
          <CardProduct 
            titleContent={ titleContent }
            image={ img_durian } 
            titleCard="Durian Bawor" 
            desc="Nikmati sensasi durian berkualitas tinggi langsung dari kebun!" 
          />
          <CardProduct 
            titleContent={ titleContent }
            image={ img_durian } 
            titleCard="Durian Bawor" 
            desc="Nikmati sensasi durian berkualitas tinggi langsung dari kebun!" 
          />
          <CardProduct 
            titleContent={ titleContent }
            image={ img_durian } 
            titleCard="Durian Bawor" 
            desc="Nikmati sensasi durian berkualitas tinggi langsung dari kebun!" 
          />
        </div>
      </div>
    </>
  )
}

export default ContentProduct