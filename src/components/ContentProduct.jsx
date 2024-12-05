import React from "react";
import CardProduct from "./CardProduct";

function ContentProduct({ titleContent, products }) {
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
  // const BgHeaderColor = titleContent === "BIBIT" ? "bg-[#A7BC2E]" : "bg-darkYellow"
  console.log(products);
  return (
    <>
      <div className="flex flex-col py-10 custom-shadow rounded-2xl items-center gap-y-10 w-full mt-7">
        <div
          className={`bg-gradient-to-r ${bgHeaderColor} w-max px-6 py-2 rounded-xl mt-0`}
        >
          <h1 className="text-md font-bold">
            {titleContent.replace("products", "").toUpperCase()}
          </h1>
        </div>
        <div className="flex flex-col justify-between gap-y-10 gap-x-5 sm:flex-row sm:flex-wrap sm:justify-center lg:gap-x-20 lg:px-5">
          {/* Edit lg:gap-x from 28 to 20 */}

          {products[titleContent].map((value, index) => (
            <CardProduct
              key={index}
              titleContent={titleContent}
              image={value.image}
              titleCard={value.name}
              desc={`Nikmati sensasi durian berkualitas tinggi langsung dari kebun!`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ContentProduct;
