import React from 'react'
import './index.css'
import Quote from '../../assets/img/review-img/quote.png'
import ReviewThumb from '../../assets/img/review-img/review-thumb.png'

export default function index() {
    return (
        <div>
            <div className="app-review d-flex align-items-center ">
                <div className="container">
                    {/* <carousel className="c-blog" : {0:{items:1,nav:false}}"> */}
                    {/* Review 1 */}
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
                    
                    {/* <span className="blog-arrow c-scroll-btn c-scroll-right align-items-center justify-content-center c-next"><img src="@/assets/img/next-arrow.png" alt=""/></span> */}
                    {/* <span className="blog-arrow c-scroll-btn c-scroll-left align-items-center justify-content-center c-prev"><img src="@/assets/img/next-arrow.png" alt=""/></span> */}
                </div>
            </div>
        </div>
    )
}
