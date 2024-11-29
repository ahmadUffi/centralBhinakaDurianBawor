import React from "react";
import image1 from "../assets/image/img_mitra_1.png";
import Wrapper from "../components/Wrapper";
import CardMitra from "../components/CardMitra";

const Mitra = () => {
  const numbers = [1, 2, 3, 4];

  return (
    <>
      <Wrapper>
        <section id="mitra" className="mt-20">
          <div className="mt-24 mb-20">
            {
              numbers.map((number) => {
                const isOdd = number % 2 === 1;

                return <CardMitra 
                  key={ number }
                  image={ image1 } 
                  title="Durian Delights" 
                  desc="Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie."
                  isOdd = { isOdd }
                />
              })
            }
            {/* <CardMitra 
              image={ image1 } 
              title="Durian Delights" 
              desc="Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie."
            />
            <CardMitra 
              image={ image1 } 
              title="Durian Delights" 
              desc="Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie."
            />
            <CardMitra 
              image={ image1 } 
              title="Durian Delights" 
              desc="Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie."
            /> */}
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Mitra;
