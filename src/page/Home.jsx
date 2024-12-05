import React from "react";
import Wrapper from "../components/Wrapper";
import Welcome from "../components/Welcome";
import Catalog from "../components/Catalog";
import Galeri from "../components/Galeri";
import Komunitas from "../components/Komunitas";
import MapEmbed from "../components/MapsTugu";
import { catalogData } from "../data";

import bgOverlayRight from "../assets/image/bgOverlayRight.png";
import CatalogCarousel from "../components/CatalogCarousel";

function Home() {
  const demo = [1, 2, 3, 4];
  const welcome = {
    bgOverlayRight: bgOverlayRight,
    name: "Durian Banyumas",
    description:
      "Banyumas dikenal sebagai salah satu Penghasil Durian Terbaik di Indonesia, Variatesnya yang unik dan cita rasa yang menggoda membuat durian Banyumas sangat Istimewa",
  };

  return (
    <>
      <Welcome {...welcome} />
      <Wrapper B>
        <div className="fild">
          {/* Catalogs */}
          <CatalogCarousel catalogDatas={catalogData} />
          {/* akhir catalog */}
          {/* Awal Komunitas */}
          <div className="">
            <div className="">
              <Komunitas />
            </div>
          </div>
          {/* akhir komunitas */}
          {/* galeri */}
          <div className="galeri-container">
            <h1 className="md:text-[38px] text-[24px] text-center mt-9 uppercase font-bold ">
              Galeri
            </h1>
            <div className="">
              <Galeri />
            </div>
          </div>
          {/* akhir galeri */}

          {/* awal maps */}
          <MapEmbed />
        </div>
      </Wrapper>

      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
