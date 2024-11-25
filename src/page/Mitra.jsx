import React from "react";
import image1 from "../assets/image/img_mitra_1.png";
import Wrapper from "../components/Wrapper";
import CardMitra from "../components/CardMitra";

const Mitra = () => {
  return (
    <>
      <Wrapper>
        <section id="mitra">
          <div className="mt-32">
            <CardMitra
              image={image1}
              title="Durian Delights"
              desc="Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie."
            />
            <CardMitra
              image={image1}
              title="Durian Delights"
              desc="Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie."
            />
            <CardMitra
              image={image1}
              title="Durian Delights"
              desc="Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie."
            />
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Mitra;
