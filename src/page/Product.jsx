import React from "react";
import Wrapper from "../components/Wrapper";
import ContentProduct from "../components/ContentProduct";
import imageHeaderProduct from "../assets/image/img-header-durian-product.png";
import bgHeaderProduct from "../assets/image/bg-header-product.svg";
import icProduct4 from "../assets/image/ic-product-4.png";
import icProduct2 from "../assets/image/ic-product-2.png";
import bgHeaderLeft from "../assets/image/bg-header-left.png";
import bgHeaderRight from "../assets/image/bg-header-right.png";

const Product = () => {
  return (
    <>
      <Wrapper>
        <section id="product">
          <div className="mt-32">

            <div id="header-product" className="custom-shadow rounded-2xl overflow-hidden relative">
              <div className="">
                <img src={bgHeaderProduct} className="absolute top-[140px] -z-10 scale-150" alt="img-header-product" />
              </div>
              <div className="">
                <img src={ bgHeaderLeft } className="absolute top-16 right-32 -z-30 bg-cover bg-left opacity-60" alt="" />
              </div>
              <div className="">
                <img src={ bgHeaderRight } className="absolute -top-7 -right-32 -z-30 bg-cover bg-left opacity-60" alt="" />
              </div>
              {/* <div className="">
                <img src={ bgHeaderLeft } className="absolute -top-8 right-32 -z-30 bg-cover bg-left opacity-60" alt="" />
              </div>
              <div className="">
                <img src={ bgHeaderRight } className="absolute -top-8 -right-32 -z-30 bg-cover bg-left opacity-60" alt="" />
              </div> */}
              <div className="">
                <img src={ icProduct4 } className="absolute top-[100px] right-8 -z-20 size-24" alt="ic-product-1" />
              </div>
              <div className="">
                <img src={ icProduct2 } className="absolute top-[120px] right-56 -z-20 size-32" alt="ic-product-1" />
              </div>
              <div className="flex flex-col items-center pt-5">
                <h1 className="text-primary text-4xl font-bold">
                  DURIAN
                </h1>
                <p className="text-primary text-2xl font-semibold">
                  BHINNEKA BAWOR
                </p>
              </div>
              <div className="pb-3">
                <img
                  src={imageHeaderProduct}
                  className="relative top-14 left-0 scale-75"
                  // className="-translate-x-6"
                  alt="Product Header"
                />
              </div>
            </div>

            <div id="card-product" className="mt-10 custom-shadow px-7 pb-7 rounded-2xl">
              <ContentProduct titleContent="DURIAN"/>
              <ContentProduct titleContent="OLAHAN PRODUK"/>
              <ContentProduct titleContent="BIBIT"/>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
};

export default Product;
