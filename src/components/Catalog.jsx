import React from "react";
import logo from "../assets/image/logo2.png";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="relative content w-[600px] h-[300px] bg-BgCatalogDuren bg-cover bg-center p-4 overflow-hidden">
        <div className="logo absolute top-0 left-0">
          <img src={logo} alt="logo" width={"40%"} />
        </div>
        <div className="content_catalog absolute bottom-0 left-auto">
          <div className="title w-max ">
            <h6 className="font-medium text-white py-1 px-2 rounded-md bg-[#4967FF]">
              Buah Durian
            </h6>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            enim non in aliquid, optio unde earum porro dolores sapiente nemo!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea maiores
            fugit beatae accusamus eaque incidunt temporibus sapiente aperiam
            laudantium qui!
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Catalog;
