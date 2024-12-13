import React from "react";
import Wrapper from "../components/Wrapper";
import Welcome from "../components/Welcome";
import Galeri from "../components/Galeri";
import Komunitas from "../components/Komunitas";
import MapEmbed from "../components/MapsTugu";
import { catalogData, galeriHome } from "../data";

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
        <div className="fild" id="field">
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
              <Galeri datas={galeriHome} />
            </div>
          </div>
          {/* akhir galeri */}

          {/* awal maps */}
          <MapEmbed
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.810488949508!2d109.31416627804167!3d-7.5827594942196805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654518238ba48b%3A0xe773e57e1e89a5b!2sTUGU%20DUREN%20Alasmalang!5e1!3m2!1sid!2sid!4v1732981690777!5m2!1sid!2sid"
            }
          />
        </div>
      </Wrapper>

      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
