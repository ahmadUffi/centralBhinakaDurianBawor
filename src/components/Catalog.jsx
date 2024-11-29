import React from "react";
import logo from "../assets/image/logo2.png";
import gambar from "../assets/image/bgCatalogDuren.jpg";

const Catalog = () => {
  return (
    <div className="relative z-0 catalog p-2 rounded-lg bg-lightYellow md:min-w-[600px] md:h-[300px]  min-w-[350px] h-[200px] inline-block ">
      <div className="relative z-10 content w-full h-full  bg-cover bg-center py-4 px-4 rounded-lg">
        <div className="gambar w-full h-full">
          <img
            src={gambar}
            alt=""
            className="w-full h-full absolute top-0 left-0  "
          />
        </div>
        <div className="logo z-20 absolute top-0 left-0">
          <img src={logo} alt="logo" width={"40%"} />
        </div>
        <div className="content_catalog absolute bottom-0 text-white py-4 px-4">
          <div className="title w-max ">
            <h6 className="font-medium text-white py-1 px-2 rounded-md bg-[#4967FF] text-[13px] md:text-[20px] mb-2">
              Buah Durian
            </h6>
          </div>
          <p className="font-medium text-[13px] md:text-[20px] text-justify leading-4 md:leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            enim non in aliquid, optio unde earum porro dolores sapiente nemo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
