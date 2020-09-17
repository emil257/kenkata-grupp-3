import React from "react";
import "./index.css";
import Product1 from "../app-product/";
import NewArrivals from "../app-section-headers/new-arrivals/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function index() {
  const params = {
    pagination: {
      el: "#swiper-pagination-arrivals",
      type: "bullets",
      clickable: true,
      centeredSlides: true,
    },
    navigation: {
      nextEl: "#swiper-product-button-next-arrivals",
      prevEl: "#swiper-product-button-prev-arrivals",
    },
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
      // when window width is >= 100px
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };
  return (
    <div className="app-new-arrivals">
     <NewArrivals></NewArrivals>
      <div className="container position-relative">

      
        <Swiper {...params}>
          <SwiperSlide>
            <Product1 tag={"sale"} className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 tag={"new"} className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 tag={"new"} className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 tag={"new"} className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 tag={"new"} className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 tag={"new"} className="product-background" />
          </SwiperSlide>
        </Swiper>
        <div
          className="swiper-button-prev"
          id="swiper-product-button-prev-arrivals"
        ></div>
        <div
          className="swiper-button-next"
          id="swiper-product-button-next-arrivals"
        ></div>
        <div className="container-pagination">
          <div
            className="swiper-pagination"
            id="swiper-pagination-arrivals"
          ></div>
        </div>
        {/* <app-section-header first="LATEST" second="BLOG" desc="Read our latest posts about our events and trending news"></app-section-header> */}

        {/* Carousel */}

        {/* <span class="blog-arrow c-scroll-btn c-scroll-right align-items-center justify-content-center c-next"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}

        {/* <span class="blog-arrow c-scroll-btn c-scroll-left align-items-center justify-content-center c-prev"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}
      </div>
    </div>
  );
}
