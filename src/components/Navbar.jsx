import React from "react";
import logo from "../assets/image/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-full flex justify-center items-start fixed top-4 z-50">
      <div className=" flex justify-between bg-white h-[70px] shadow-lg  w-[95%] items-center p-1 rounded-md">
        <div className="icon">
          <img src={logo} alt="logo" width={"60%"} />
        </div>
        <div className="action">
          <ul className="flex gap-4 mr-2 fo">
            <NavLink to="/">Home</NavLink>
            <NavLink to="products">Product</NavLink>
            <NavLink to="mitra">Mitra</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
