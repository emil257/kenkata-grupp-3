import React from 'react'
import ContactImage from '../../assets/img/contact-image.png'
import './index.css';

export default function index() {
    return (
        <div>
            <div className="app-contact">
                <div className="container d-flex flex-column flex-xl-row justify-content-between align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-5 px-0 mb-5 mb-xl-0">
                        <h2>
                            SUBSCRIBE
                            <span className="text-theme-color"> NOW</span>
                        </h2>
                        <p>
                            Signup for awesome news about our new products and
                            know our special discounts on products.
                        </p>
                        <div className="contact-input-grp">
                            <input type="text" className="form-control contact-input" placeholder="Enter email adress" />
                            <button className="contact-input-btn">Subscribe</button>
                        </div>
                    </div>
                    <img className="contact-img" src={ContactImage} alt="contact img"></img>
                </div>
            </div>
        </div>
    )
}
