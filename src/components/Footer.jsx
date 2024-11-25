import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer bg-black text-white p-5 flex justify-center items-center">
      <p className="text-center">
        {" "}
        Durian Bhineka Bawor. <br className="md:hidden block" /> &copy; {year}{" "}
        All rights reserved.
      </p>
    </div>
  );
};
