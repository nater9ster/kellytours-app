import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageArray } from "../app/data/imageArray";

const ImageCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // <img src={require('/assets/img/empire_state.jpg')} />
  const images = imageArray
  // Add more image URLs here


  return (
    <div>
      <Slider {...carouselSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={`Image ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
