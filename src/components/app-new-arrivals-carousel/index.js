import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination ]);

export default function index() {

    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            centeredSlides: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        slidesPerView: 3,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }
        }
    return (
        <div>
             <Swiper
                {...params}
                >
                <SwiperSlide><div className="swiper-slide">Slide 1</div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide">Slide 2</div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide">Slide 3</div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide">Slide 4</div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide">Slide 5</div></SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
            <div className="container-pagination">
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}
