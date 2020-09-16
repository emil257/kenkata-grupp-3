import React from 'react'
import './index.css'
import Underline from '../../../assets/img/blog-img/underline.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination ]);

export default function Index() {
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
            <div className="app-latest-blog-header d-flex align-items-center flex-column">
                <h3>
                    <span>NEW ARRIVALS<span className="text-theme-color"> CATEGORY</span></span>
                </h3>
                <img src={Underline} alt="underline" />
                <p className="text-second-color">Check out our latest products from top fashion designers</p>
            </div>
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
