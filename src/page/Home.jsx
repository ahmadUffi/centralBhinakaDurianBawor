import React from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import Welcome from "../components/Welcome";
import Catalog from "../components/Catalog";

function Home() {
  return (
    <>
      <Welcome />
      <div className="fild">
        <div className="title">
          <h1 className="text-[38px] text-center font-medium">
            Ini akan menjadi alasan kelezatan, dengan <br /> cita rasa unik dan
            menarik
          </h1>
          <Catalog />
        </div>
      </div>
    </>
  );
}

export default Home;
