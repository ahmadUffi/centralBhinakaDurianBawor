import React from "react";
import image1 from "../assets/image/img_mitra_1.png";
import Wrapper from "../components/Wrapper";
import CardMitra from "../components/CardMitra";
import { mitra } from "../data";

const Mitra = () => {
  return (
    <>
      <Wrapper>
        <section id="mitra" className="mt-20">
          <div className="mt-24 mb-20">
            {mitra.map((m) => {
              return (
                <CardMitra
                  key={m.id}
                  image={m.fotoToko}
                  title={m.toko}
                  desc={m.description}
                  isOdd={m.id % 2 == 1}
                  link={`${m.params}`}
                />
              );
            })}
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Mitra;
