import { useState, useEffect } from "react";
import Slider from "react-slick";
import thought from "../assets/images/thought.jpg";
import alexan from "../assets/images/alexandra.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [alexan];

const Heroo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allImages = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
      });
    });

    Promise.all(allImages).then(() => setLoading(false));
  }, []);

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
      <div className="w-full h-[50vh] flex justify-center items-center">
        {loading ? (
          <div className="relative w-full h-full animate-pulse">
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gray rounded-b-xl"></div>
          </div>
        ) : (
          <Slider {...settings} className="w-full h-full">
            {images.map((image, index) => (
              <div key={index} className="w-full h-[50vh]">
                <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-b-xl" />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Heroo;
