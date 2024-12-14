import image1 from "../assets/image/img_mitra_1.png";
import image2 from "../assets/image/img_mitra_1.png";
import Wrapper from "../components/Wrapper";
import { mitra } from "../data";
import { useParams } from "react-router-dom";
import Welcome from "../components/Welcome";
import CatalogCarousel from "../components/CatalogCarousel";
import ContentProduct from "../components/ContentProduct";
import Galeri from "../components/Galeri";
import CardMitra from "../components/CardMitra";
import MapEmbed from "../components/MapsTugu";

const cardsData = [
  { image: image1, description: "Durian Delights" },
  { image: image2, description: "Durian Delights" },
  { image: image1, description: "Durian Delights" },
];

const MitraPage = () => {
  const { id } = useParams();
  const target = mitra.find((target) => target.params == id);
  console.log(target);
  return (
    <div className="mitraPgae">
      <Welcome
        bgOverlayRight={target.image}
        name={target.toko}
        description={target.kataPromosi}
      />
      <Wrapper>
        <div className="w-full field" id="field">
          <CatalogCarousel
            catalogDatas={target.listProducts}
            desc={target.description}
          />
        </div>
        {Object.keys(target.product).map((categoryProduct, index) => {
          return (
            <ContentProduct
              key={index}
              titleContent={categoryProduct}
              products={target.product}
              wa={target.linkWhatsapp}
            />
          );
        })}
        {/* galeri */}
        <div className="galeri-container">
          <h1 className="md:text-[38px] text-[24px] text-center mt-9 uppercase font-bold mb-4">
            Galeri
          </h1>
          <div className="">
            <Galeri datas={target.galeri} />
          </div>
        </div>
        {/* akhir galeri */}
        {/* Fasilitas */}
        <div className="fasilitas-container">
          <h1 className="md:text-[38px] text-[24px] text-center mt-9 uppercase font-bold mb-4">
            Fasilitas
          </h1>
          <div className="">
            {target.fasilitas.map((fasilitas, index) => (
              <CardMitra
                key={index}
                title={fasilitas.name}
                isOdd={index % 2 == 1}
                desc={fasilitas.description}
                image={fasilitas.image}
              />
            ))}
          </div>
        </div>

        {/* fasilitas */}
        {/* maps */}
        <div className="maps-container mb-8">
          <h1 className="md:text-[38px] text-[24px] text-center mt-9 uppercase font-bold mb-4">
            Lokasi
          </h1>
          <MapEmbed src={target.linkMap} />
        </div>
        {/* akhir maps */}
      </Wrapper>
    </div>
  );
};

export default MitraPage;
