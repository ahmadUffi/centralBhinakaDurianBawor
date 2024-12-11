import React from "react";
import CardProduct from "./CardProduct";

function ContentProduct({ titleContent, products, wa }) {
  let bgHeaderColor;

  switch (titleContent) {
    case "productsBibit":
      bgHeaderColor = "bg-[#A7BC2E]";
      break;
    case "productsDurian":
      bgHeaderColor = "bg-darkYellow";
      break;
    case "productsOlahan":
      bgHeaderColor = "bg-[#FFE700]";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="flex flex-col py-10 custom-shadow rounded-2xl items-center gap-y-10 mt-7 px-7 mb-5 ">
        <div
          className={`bg-gradient-to-r ${bgHeaderColor} w-max px-6 py-2 rounded-xl mt-0`}
        >
          <h1 className="text-md font-bold">
            {titleContent.replace("products", "").toUpperCase()}
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-7 sm:flex-row flex-wrap">
          {/* Edit lg:gap-x from 28 to 20 */}

          {products[titleContent].map((value, index) => (
            <CardProduct 
              key={index} 
              titleContent={titleContent} 
              image={value.image} 
              titleCard={value.name} 
              desc={value.desc} 
              wa={wa}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ContentProduct;
