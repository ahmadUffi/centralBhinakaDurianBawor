import React from "react";
import backgroundImage from "../assets/image/background.png";

const MitraPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center gap-16 pb-28"
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
      <div className="w-[968px] h-[447px] bg-darkYellow flex justify-center py-1">
        <div
          className="w-[773px] h-[436px] flex justify-center items-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full">
            <h1 className="font-bold">DURIAN BAWOR BANYUMAS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos
              labore fugit vero tenetur pariatur iusto officia dicta quisquam
              minus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitraPage;
