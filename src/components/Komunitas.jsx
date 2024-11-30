import React from "react";
import img from "../assets/image/komunitas.jpg";

const Komunitas = () => {
  return (
    <div className="komitas gap-4 w-full flex justify-center items-center flex-col">
      <h1 className="md:text-[38px] text-[24px] text-center mt-9 uppercase font-bold ">
        Kenapa Banyumas ?
      </h1>
      <div className="text-center w-[100%] inline-block font-thin text-[11px] md:text-[16px]">
        Banyumas dikenal sebagai salah satu daerah penghasil durian terbaik di
        Indonesia. Dengan varian yang unik dan cita rasa yang luar biasa, durian
        Banyumas menawarkan pengalaman rasa yang tak terlupakan dan
        menjadikannya benar-benar istimewa!
      </div>
      <div className="komunitas-container rounded-2xl  pt-10 px-12 border bg-lightYellow box-shadow ma">
        <img
          src={img}
          alt=""
          className="lg:max-w-4xl md:max-w-xl max-w-[250px] md:rounded-2xl aspect-video"
        />
      </div>

      <div className="text-justify columns-rule md:w-[80%] w-[100%] mt-7 md:leading-8 columns-2 inline-block font-thin text-[11px] md:text-[18px]">
        Banyumas dikenal sebagai salah satu daerah penghasil durian terbaik di
        Indonesia. Dengan varian yang unik dan cita rasa yang luar biasa, durian
        Banyumas menawarkan pengalaman rasa yang tak terlupakan dan
        menjadikannya benar-benar istimewa! Selain Alasmalang, beberapa daerah
        lain seperti Kecamatan Tambak, Gumelar, dan Ajibarang juga dikenal
        sebagai penghasil durian berkualitas. Durian Banyumas, termasuk varietas
        unggulan seperti Durian Petruk, menawarkan rasa manis legit dan aroma
        khas, menjadikannya daya tarik lokal sekaligus primadona dalam pasar
        durian. 🌟
      </div>
    </div>
  );
};

export default Komunitas;
