import React from 'react'
import './index.css'
import AppBlogItem from './app-blog-item/index'

export default function index() {
    return (
        <div>
            <div class="app-latest-blog">
                <div class="container position-relative">

                    {/* <app-section-header first="LATEST" second="BLOG" desc="Read our latest posts about our events and trending news"></app-section-header> */}

                    {/* Carousel */}

                    <AppBlogItem></AppBlogItem>
                    <AppBlogItem></AppBlogItem>
                    <AppBlogItem></AppBlogItem>
                   


                    {/* <span class="blog-arrow c-scroll-btn c-scroll-right align-items-center justify-content-center c-next"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}


                    {/* <span class="blog-arrow c-scroll-btn c-scroll-left align-items-center justify-content-center c-prev"><img src="@/assets/img/next-arrow.png" alt="" /></span> */}
                    
                </div>
            </div>
        </div>
    )
}
