import Slider from "react-slick";
import thought from "../assets/images/thought.jpg";
import alexan from "../assets/images/alexandra.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [thought,alexan];

const Heroo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  return (
    <div className="relative w-full h-[50vh]">
      <div className="absolute top-0 left-0 w-full h-full rounded-b-xl bg-custom-yellow"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-b-xl"></div>
      <div className="w-full h-[40vh] flex justify-center items-center">
        <Slider {...settings} className="w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="w-full h-[50vh]">
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-b-xl" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Heroo;
