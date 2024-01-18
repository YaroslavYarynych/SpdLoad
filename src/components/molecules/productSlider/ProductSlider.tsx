import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { ProductCard } from "../productCard/ProductCard.js";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { dataFromServer, IsLoaded } from "../../../store/atoms.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProductSlider.scss";
import { clientApi } from "../../../api/api.js";

register();

const HeaderProductSlider = styled.h1`
font-size: 20px;
font-weight: 800;
line-height: 38px;
text-transform: uppercase; 
@media (min-width: 678px) {
  font-size: 32px;
}
`

export const ProductSlider = () => {
  const [itemsFromServer, setItemsFromServer] = useRecoilState(dataFromServer);
  const [isLoader, setIsLoader] = useRecoilState(IsLoaded);

	useEffect(() => {
		clientApi(setItemsFromServer, setIsLoader)	
	}, []);

  return (
    <div className="product-container">
      <div className="product-container-top">
        <HeaderProductSlider>popular tours</HeaderProductSlider>
        <div className="button-arrows">
        <button
          type="button"
          className="swiper-button-prev"
        />
        <button
          type="button"
          className="swiper-button-next"
        />
        </div>
      </div>
      <div className="product-container-body">
        <Swiper
          wrapperClass="product-slider-container"
          spaceBetween={24}
          navigation={
            {
              prevEl: ".swiper-button-prev",
              nextEl: '.swiper-button-next',  
            }
          }
          onSlideChange={() => console.log("change")}
          pagination={{ clickable: true }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1.25,
            },
            600: {
              slidesPerView: 1.5,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1220: {
              slidesPerView: 3,
            },

          }}
        >
          {isLoader ? (Array(3).fill(0).map((item) => (
            <SwiperSlide>
              <ProductCard item={item} key={item.id} loader={isLoader} />
            </SwiperSlide>
          )))
          : (
            itemsFromServer.map(item => (
              <SwiperSlide>
                <ProductCard item={item} key={item.id} loader={isLoader} />
              </SwiperSlide>
            ))

          )
        }
        </Swiper>
      </div> 
    </div>
  );
}