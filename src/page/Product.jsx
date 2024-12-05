import React from "react";
import Wrapper from "../components/Wrapper";
import ContentProduct from "../components/ContentProduct";
import imageHeaderProduct from "../assets/image/img-header-durian-product.png";
import bgHeaderProduct from "../assets/image/bg-header-product.svg";
import icProduct4 from "../assets/image/ic-product-4.png";
import icProduct2 from "../assets/image/ic-product-2.png";
import bgHeaderLeft from "../assets/image/bg-header-left.png";
import bgHeaderRight from "../assets/image/bg-header-right.png";
import bgHeaderProductLg from "../assets/image/bg-header-product-lg.png";
import { product } from "../data";

const Product = () => {
  return (
    <>
      <Wrapper>
        <section id="product">
          <div className="mt-32 lg:mt-[6%]">

            {/* Header screen Mobile */}
            <div id="header-product" className="custom-shadow mx-3 rounded-2xl overflow-hidden relative sm:hidden">
              <div className="">
                <img src={bgHeaderProduct} className="absolute top-[38%] -z-10 scale-[1.8]" alt="img-header-product" />
              </div>
              <div className="">
                <img src={ bgHeaderLeft } className="absolute top-[10%] right-[30%] bg-cover bg-left -z-30 opacity-60 translate-x-0" alt="" />
              </div>
              <div className="">
                <img src={ bgHeaderRight } className="absolute -top-[10%] left-[30%] -z-30 bg-left opacity-60" alt="" />
              </div>
              <div className="">
                <img src={ icProduct4 } className="absolute top-[30%] right-[11%] -z-20 size-20 sm:-translate-x-30" alt="ic-product-right" />
              </div>
              <div className="">
                <img src={ icProduct2 } className="absolute top-[40%] left-[6%] -z-20 size-28 sm:translate-x-0" alt="ic-product-left" />
              </div>
              <div className="flex flex-col items-center pt-5">
                <h1 className="text-primary text-3xl font-bold">
                  DURIAN
                </h1>
                <p className="text-primary text-xl font-semibold">
                  BHINNEKA BAWOR
                </p>
              </div>
              <div className="pb-3 ">
                <img
                  src={imageHeaderProduct}
                  className="scale-75 relative z-40 left-[3%] top-[45px] customSm:top-[80px]"
                  alt="Product Header"
                />
              </div>
            </div>

            {/* Header Screen Tab and Desktop */}
            <div className="hidden sm:block">
              <img src={ bgHeaderProductLg } className="custom-shadow bg-cover bg-center scale-90 rounded-3xl" alt="" />
            </div>
            <div id="card-product" className="flex flex-col gap-y-10 my-10 mx-3 px-0 pb-7 sm:mx-7 md:mx-9">
              {
                Object.keys(product).map((categoryProduct, index) => {
                  return (
                    <ContentProduct key={index} titleContent={ categoryProduct } />
                  );
                })
              }
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
};

export default Product;
