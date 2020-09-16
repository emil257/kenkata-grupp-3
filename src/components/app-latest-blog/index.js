import React from 'react'
import './index.css'
import AppBlogItem from './app-blog-item/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import AppBlogHeader from '../app-section-headers/latest-blog/index';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

import BlogHeader from '../app-section-headers/latest-blog'

SwiperCore.use([Navigation, Pagination, Autoplay ]);


export default function index() {
    const params = {
        pagination: {
<<<<<<< HEAD
            el: '#latest-blog-pagination',
=======
            el: '#swiper-pagination-blog',
>>>>>>> d8cb439274c7e82eb498772ca0e3f55050802020
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
<<<<<<< HEAD
      <div className="app-latest-blog">
      <AppBlogHeader></AppBlogHeader>
=======
            <div className="app-latest-blog">
                <BlogHeader/>
>>>>>>> d8cb439274c7e82eb498772ca0e3f55050802020
                <div className="container position-relative">

                    <Swiper
                        {...params}
                        >
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                    </Swiper>
<<<<<<< HEAD
                        <div className="swiper-button-prev" id="button-prev-blog"></div>
                        <div className="swiper-button-next" id="button-next-blog"></div>
                        <div className="container-pagination">
                            <div className="swiper-pagination" id="latest-blog-pagination"></div>
                        </div>
                        
=======
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    <div className="container-pagination">
                        <div className="swiper-pagination" id="swiper-pagination-blog"></div>
                    </div>
>>>>>>> d8cb439274c7e82eb498772ca0e3f55050802020
                    {/* <app-section-header first="LATEST" second="BLOG" desc="Read our latest posts about our events and trending news"></app-section-header> */}

                    {/* Carousel */}

                    
                   


                    {/* <span class="blog-arrow c-scroll-btn c-scroll-right align-items-center justify-content-center c-next"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}


                    {/* <span class="blog-arrow c-scroll-btn c-scroll-left align-items-center justify-content-center c-prev"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}
                    
                </div>

            </div>
    )
}
