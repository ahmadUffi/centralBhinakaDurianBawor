import React from "react";
import Catalog from "./Catalog";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
function CatalogCarousel({ catalogDatas, desc }) {
  return (
    <div className="catalog-container ">
      <div className="title-catalog md:p-11">
        <h1 className="md:text-[18px] text-[14px] text-center font-medium mt-9 ">
          {desc}
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
