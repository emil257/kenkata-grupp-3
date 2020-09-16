import React from 'react'
import './index.css'
import Quote from '../../assets/img/review-img/quote.png'
import ReviewThumb from '../../assets/img/review-img/review-thumb.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);


export default function index() {
    const params = {
        pagination: {
            el: '#swiper-reviews',
            type: 'bullets',
            clickable: true,
            centeredSlides: true
        },
        navigation: {
            nextEl: '#swiper-reviews-button-next',
            prevEl: '#swiper-reviews-button-prev'
        },
        spaceBetween: 30,
        slidesPerView: 1,
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false
        // },
    
    }
    return (
        <div>

            <div className="app-review d-flex align-items-center ">
                <div className="container position-relative">


                    <Swiper
                        {...params}
                    >
                        <SwiperSlide>
                            {/* Item 1 */}
                            <div className="d-flex flex-column align-items-center">
                                <img className="r-quote" src={Quote} alt="quote" />
                                <img className="r-thumb" src={ReviewThumb} alt="thumb" />
                                <div className="r-stars">
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="far fa-star "></i>
                                </div>
                                <p className="r-thumb-auth text-theme-color">Johny Wesmullar</p>
                                <p className="r-thumb-desc">CEO, Biotech Inc.</p>
                                <p className="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Item 2 */}
                            <div className="d-flex flex-column align-items-center">
                                <img className="r-quote" src={Quote} alt="quote" />
                                <img className="r-thumb" src={ReviewThumb} alt="thumb" />
                                <div className="r-stars">
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="far fa-star "></i>
                                </div>
                                <p className="r-thumb-auth text-theme-color">Johny Wesmullar</p>
                                <p className="r-thumb-desc">CEO, Biotech Inc.</p>
                                <p className="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>

                        </SwiperSlide>
                          <SwiperSlide>
                            {/* Item 3 */}
                            <div className="d-flex flex-column align-items-center">
                                <img className="r-quote" src={Quote} alt="quote" />
                                <img className="r-thumb" src={ReviewThumb} alt="thumb" />
                                <div className="r-stars">
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="fas fa-star "></i>
                                    <i className="far fa-star "></i>
                                </div>
                                <p className="r-thumb-auth text-theme-color">Johny Wesmullar</p>
                                <p className="r-thumb-desc">CEO, Biotech Inc.</p>
                                <p className="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>

                        </SwiperSlide>
                    </Swiper>   


                        <div className="swiper-button-prev" id="swiper-reviews-button-prev"></div>
                        <div className="swiper-button-next" id="swiper-reviews-button-next"></div>
                    
                    
                    <div className="container-pagination">
                        <div className="swiper-pagination" id="swiper-reviews"></div>
                    </div>
                </div>
            </div>
         
        </div>
    )
}