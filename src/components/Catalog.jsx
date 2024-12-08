import React from "react";
import logo from "../assets/image/logo2.png";
import gambar from "../assets/image/catalogDurian.png";
import { Link } from "react-router-dom";

const Catalog = ({ img, description }) => {
  return (
    <Link to="products">
      <div className="relative catalog p-2 rounded-lg  md:min-w-[600px] md:h-[300px]  min-w-[350px] h-[200px] cursor-pointer ">
        <div className="relative z-20 content w-full h-full  bg-cover bg-center py-4 px-4 rounded-lg">
          <div className="gambar w-full h-full absolute  top-0 left-0 brightness-75 z-[-10]">
            <img src={img} alt="" className="w-full h-full " />
          </div>
          <div className="logo z-30 absolute top-0 left-0">
            <img src={logo} alt="logo" width={"40%"} />
          </div>
          <div className="z-40 content_catalog absolute bottom-0 text-white py-4 px-4">
            <div className="title w-max "></div>
            <p className="font-medium text-[13px] md:text-[20px] text-justify leading-4 md:leading-7">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Catalog;
