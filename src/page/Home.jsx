import React from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import Welcome from "../components/Welcome";
import Catalog from "../components/Catalog";

function Home() {
  const demo = [1, 2, 3];
  return (
    <>
      <Welcome />
      <Wrapper>
        <div className="fild">
          {/* Catalogs */}
          <div className="catalog-container">
            <div className="title-catalog">
              <h1 className="md:text-[38px] text-[24px] text-center font-medium mt-9">
                Ini akan menjadi alasan kelezatan, dengan{" "}
                <br className="hidden md:block" /> cita rasa unik dan menarik
              </h1>
            </div>
            <div className="catalogs flex overflow-x-auto gap-[20px] mt-5 ">
              {demo.map((catalog, index) => (
                <Catalog key={index} />
              ))}
            </div>
          </div>
          {/* akhir catalog */}
          {/* Komunitas */}
          <div className="komunitas-container">
            <h1 className="md:text-[38px] text-[24px] text-center mt-9 uppercase font-bold ">
              Komunitas durian bawor
            </h1>
          </div>
          {/* akhir komunitas */}
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
