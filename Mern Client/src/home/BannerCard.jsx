import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';

import "./BannerCard.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
