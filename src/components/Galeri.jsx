import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gambar from "../assets/image/bgCatalogDuren.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Galeri = () => {
  const [swiperKey, setSwiperKey] = useState(0);
  const [slideConfig, setSlideConfig] = useState(3);
  const [size, setSize] = useState();
  const [coverflowEffectConfig, setCoverflowEffect] = useState({
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1080) {
        setCoverflowEffect({
          rotate: 0,
          stretch: -30,
          depth: 210,
          modifier: 2.5,
          slideShadows: true,
        });
        setSize(50);
      } else if (width >= 768) {
        setCoverflowEffect({
          rotate: 0,
          stretch: -30,
          depth: 280,
          modifier: 2,
          slideShadows: true,
        });
        setSize(35);
      } else {
        setCoverflowEffect({
          rotate: 0,
          stretch: -8,
          depth: 180,
          modifier: 2.5,
          slideShadow7s: true,
        });
        setSlideConfig(2);
        setSize(25);
      }
      setSwiperKey((prevKey) => prevKey + 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(swiperKey);
  return (
    <div className="slider-container">
      <Swiper
        key={swiperKey}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slideConfig}
        coverflowEffect={coverflowEffectConfig}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <img src={gambar} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}

        <div className="slider-controler flex justify-center items-center gap-5 mt-6">
          <div className="swiper-button-prev">
            <IoIosArrowBack size={size} />
          </div>
          <div className="swiper-button-next">
            <IoIosArrowForward size={size} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Galeri;
