import React from 'react';
import Banner from '../../assets/img/Banner-thumb.png'
import './index.css'


export default function index() {
    return (
        <div>
            <div className="banner">
                <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center pt-5 pt-lg-0">
                    <div className="banner-content mb-5 mb-lg-0 px-4 px-lg-0">
                        <h1>
                            Shopping is
                        <span className="text-theme-color">MORE FUN</span>
                        </h1>
                        <p className="py-3">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
                        <button className="btn custom-cta-btn">SHOP NOW</button>
                    </div>
                    <img className="col-10 col-md-9 col-lg-8 col-xl-7" src={Banner} alt="" />
                </div>
            </div>
        </div>
    )
}
