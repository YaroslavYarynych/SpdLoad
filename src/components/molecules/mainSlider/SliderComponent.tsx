/* eslint-disable */
import imageone from "../../../img/image-1.png";
import imagetwo from "../../../img/image-2.png";
import imagethree from "../../../img/image-3.png";
import { styled } from "styled-components";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import './Swiper.scss';

register();

const SliderStyle = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center center;
`;

const SliderComponent: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="slider-container">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        onSlideChange={() => console.log("Slider Swipe")}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SliderStyle src={imageone} alt="Slider image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderStyle src={imagetwo} alt="Slider image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderStyle src={imagethree} alt="Slider image 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
