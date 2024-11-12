import React from "react";
import img1 from "../assets/image/img_mitra_1.png";

const Mitra = () => {
  return (
    <>
      <section id="mitra">
        <div className="mt-10">
          <div className="mx-14 py-12 px-9 custom-shadow rounded-2xl">
            <div className="flex items-center">
              <div className="w-[55%] flex flex-col gap-y-10">
                <h1 className="text-5xl font-bold">Durian Delights</h1>
                <p className="text-2xl font-normal max-w-2xl">
                  Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie.
                </p>
                <button className="w-1/2 p-2 bg-yellow-400 text-stone-900 font-semibold rounded-[10px] transition duration-[400ms] ease-in-out hover:bg-yellow-600">Pelajari lebih lanjut</button>
              </div>
              <div className="flex justify-center w-[45%]">
                <img src={img1} className="w-full " alt="Mitra 1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mitra;
