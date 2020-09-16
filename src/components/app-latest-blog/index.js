import React from 'react'
import './index.css'
import AppBlogItem from './app-blog-item/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Autoplay ]);


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
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            // when window width is >= 100px
            100: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40
            }
          }
        }
    return (
            <div className="app-latest-blog">
                <div className="container position-relative">

                    <Swiper
                        {...params}
                        >
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                    </Swiper>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    <div className="container-pagination">
                        <div className="swiper-pagination"></div>
                    </div>
                    {/* <app-section-header first="LATEST" second="BLOG" desc="Read our latest posts about our events and trending news"></app-section-header> */}

                    {/* Carousel */}

                    
                   


                    {/* <span class="blog-arrow c-scroll-btn c-scroll-right align-items-center justify-content-center c-next"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}


                    {/* <span class="blog-arrow c-scroll-btn c-scroll-left align-items-center justify-content-center c-prev"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}
                    
                </div>
            </div>
    )
}
