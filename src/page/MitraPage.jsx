import backgroundImage from "../assets/image/background.png";
import durian from "../assets/image/durian.svg";
import ScrollableCard from "../components/CatalogCarousel";
import image1 from "../assets/image/img_mitra_1.png";
import image2 from "../assets/image/img_mitra_1.png";
import Wrapper from "../components/Wrapper";
import { mitra } from "../data";
import { useParams } from "react-router-dom";
import Welcome from "../components/Welcome";
import Catalog from "../components/Catalog";
import CatalogCarousel from "../components/CatalogCarousel";

const cardsData = [
  { image: image1, description: "Durian Delights" },
  { image: image2, description: "Durian Delights" },
  { image: image1, description: "Durian Delights" },
];

const MitraPage = () => {
  const { id } = useParams();
  const target = mitra.find((target) => target.id == id);
  console.log(target);
  return (
    <div className="mitraPgae">
      <Welcome
        bgOverlayRight={target.image}
        name={target.toko}
        description={target.kataPromosi}
      />
      <Wrapper>
        <div className="w-full field">
          <CatalogCarousel catalogDatas={target.listProducts} />
        </div>
      </Wrapper>
    </div>
  );
};

export default MitraPage;
