import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScrollableCard = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Slider Wrapper */}
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-2">
            {/* Card */}
            <div className="relative bg-white shadow-md rounded-2xl overflow-hidden">
              {/* Image */}
              <img
                src={card.image}
                alt={card.description}
                className="w-[645px] h-[364px] object-cover"
              />
              {/* Transparent Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-60 text-white p-4">
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScrollableCard;
