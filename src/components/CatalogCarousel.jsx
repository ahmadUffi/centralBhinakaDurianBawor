import React from "react";
import Catalog from "./Catalog";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
function CatalogCarousel({ catalogDatas }) {
  return (
    <div className="catalog-container ">
      <div className="title-catalog">
        <h1 className="md:text-[38px] text-[24px] text-center font-medium mt-9">
          Ini akan menjadi alasan kelezatan, dengan{" "}
          <br className="hidden md:block" /> cita rasa unik dan menarik
        </h1>
      </div>
      <div className="catalogs flex  justify-evenly mt-5 ">
        {catalogDatas.map((catalog, index) => (
          <Catalog
            key={index}
            img={catalog.image}
            description={catalog.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogCarousel;
