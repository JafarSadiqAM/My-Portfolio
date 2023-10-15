import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="w-full mx-auto px-12 pt-8 pb-12 max-w-7xl">
      <Slider {...settings}>
        <div className="w-full mx-auto px-12 pb-12 max-w-7xl">
          <img
            src="https://source.unsplash.com/720x600/?salon,Haircut"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/720x600/?salon,Hair Coloring"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/720x600/?salon,Facial"
            alt="Slide 3"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/720x600/?salon,Padicure"
            alt="Slide 4"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/720x600/?salon,Threading"
            alt="Slide 5"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
