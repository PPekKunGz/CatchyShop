"use client";
import React, { useRef, useState } from "react";
import styles from "../styles/components/slider.module.scss";
import data from "../../../data/swiper.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function Slider() {
  const swiperData = data;
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {swiperData.map((data, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <img src={data.img} alt="SwiperSlide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
