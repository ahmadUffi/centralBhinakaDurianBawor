import React from "react";
import CardProduct from "./CardProduct";
import img_durian from "../assets/image/img-product-durian-1.png";

function ContentProduct({ titleContent }) {
  return (
    <>
      <div className="flex flex-col items-center gap-y-9">
        <div className="bg-gradient-to-r from-darkYellow via-lightYellow to-orange-300 w-max px-8 py-3 rounded-xl mt-14">
          {/* <div className="bg-dark-yellow w-max px-8 py-3 rounded-xl"> */}
          <h1 className="text-xl font-bold">{titleContent}</h1>
        </div>
        <CardProduct
          image={img_durian}
          titleCard="Durian Bawor"
          desc="Nikmati sensasi durian berkualitas tinggi langsung dari kebun!"
        />
        <CardProduct
          image={img_durian}
          titleCard="Durian Bawor"
          desc="Nikmati sensasi durian berkualitas tinggi langsung dari kebun!"
        />
      </div>
    </>
  );
}

export default ContentProduct;
