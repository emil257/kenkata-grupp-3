import React from "react";
import "./index.css";
import FeaturedProduct from "../app-product/";
import FeaturedProducts from "../app-section-headers/featured-products/index";
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
            el: "#swiper-pagination-featured-products",
            type: "bullets",
            clickable: true,
            centeredSlides: true,
        },
        navigation: {
            nextEl: "#swiper-featured-products-button-next",
            prevEl: "#swiper-featured-products-button-prev",
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
        <div className="app-featured-products">
            <FeaturedProducts></FeaturedProducts>
            <div className="container position-relative">
                <Swiper {...params}>
                    <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"sale"} className="product-background" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"sale"} className="product-background" />
                    </SwiperSlide>
                </Swiper>
                <div
                    className="swiper-button-prev"
                    id="swiper-featured-products-button-prev"
                ></div>
                <div
                    className="swiper-button-next"
                    id="swiper-featured-products-button-prev"
                ></div>
                <div className="container-pagination">
                    <div
                        className="swiper-pagination"
                        id="swiper-pagination-featured-products"
                    ></div>
                </div>
            </div>
        </div>
    );
}
