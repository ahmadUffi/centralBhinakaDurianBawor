import React from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import Welcome from "../components/Welcome";
import Catalog from "../components/Catalog";
import image1 from "../assets/image/img_mitra_1.png";
import CardMitra from "../components/CardMitra";
import Galeri from "../components/Galeri";
import Komunitas from "../components/Komunitas";
import CatalogCarousel from "../components/CatalogCarousel";
import MapEmbed from "../components/MapsTugu";
import { catalogData } from "../data";

function Home() {
  const demo = [1, 2, 3, 4];

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
            <div className="catalogs flex gap-[20px] mt-5 ">
              {catalogData.map((catalog, index) => (
                <Catalog
                  key={index}
                  img={catalog.image}
                  description={catalog.description}
                />
              ))}
            </div>
          </div>
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
