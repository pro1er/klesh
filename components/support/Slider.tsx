"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

interface CustomDotProps {
  onClick?: () => void;
  active: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  return (
    <li
      className={`inline-block mx-2 cursor-pointer rounded-full mb-4 ${
        active ? "bg-yellow-500" : "text-gray-400"
      }`}
      onClick={onClick}
    >
      <div
        className={`w-2 h-2 rounded-full ${
          active ? "bg-yellow-500" : "bg-gray-400"
        }`}
      />
    </li>
  );
};

const Images = [
  {
    img: "/product/5.jpg",
  },
  {
    img: "/product/6.jpg",
  },
  {
    img: "/product/9.jpg",
  },
];

const Slider = () => {
  return (
    <div className="parent w-full h-full relative">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
        renderDotsOutside={false}
        ssr={true}
        centerMode={false}
        customDot={<CustomDot active={false} />} // Pass component as ReactElement
        renderButtonGroupOutside={true}
        showDots={true}
        itemClass="carousel-item-padding-40-px"
      >
        {Images.map((image, index) => (
          <div className="text-white h-full w-full" key={index}>
            <img
              src={image.img}
              alt="movie"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
