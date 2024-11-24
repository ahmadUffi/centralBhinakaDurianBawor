import React from "react";
import backgroundImage from "../assets/image/background.png";
import durian from "../assets/image/durian.svg";
import ScrollableCard from "../components/CatalogCarousel";
import image1 from "../assets/image/img_mitra_1.png";
import image2 from "../assets/image/img_mitra_1.png";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

const cardsData = [
  { image: image1, description: "Durian Delights" },
  { image: image2, description: "Durian Delights" },
  { image: image1, description: "Durian Delights" },
];

const MitraPage = () => {
  return (
    <Wrapper>
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center gap-16 pb-28 w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col justify-center text-center gap-16 border-solid border-pink-400 pt-56">
          <h1 className="text-black text-5xl uppercase font-bold">
            Selamat datang di
            <br /> Pengalaman Durian Bawor
          </h1>
          <p className="text-xl max-w-[40rem]">
            Temukan Kelezatan dan Kualitas Terbaik dari Durian dengan Cita Rasa
            Unik dan Menarik
          </p>
        </div>
        <div className="flex items-center justify-center w-[968px] h-[447px] bg-darkYellow">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center w-[773px] h-[436px]">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-4 text-center">
                DURIAN BAWOR BANYUMAS
              </h1>
              <p className="text-gray-700 text-center">
                Kami adalah komunitas yang berfokus pada keberagaman dan
                pelestarian lingkungan, dengan semangat menciptakan perubahan
                positif bagi lingkungan dan masyarakat sekitar.
              </p>
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <img
                src={durian}
                alt="Durian"
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between items-center text-center">
          <h1 className="font-semibold text-xl max-w-xl ">
            Lebih dari 1.000 orang telah merasakan kenikmatannya, menjadikan
            favorit baru yang menggugah selera.
          </h1>

          <p>catalog Durian Bawor</p>

          {/* Banner */}
          <div className="w-full px-4 py-8">
            <ScrollableCard cards={cardsData} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MitraPage;
