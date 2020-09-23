import React from 'react'
import Iframe from 'react-iframe'
import "./index.css";
import Brands from '../app-brands/index'

export default function index() {
    return (
        <div>
            
                <Iframe className="map" url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15998.75092589006!2d16.59003593955078!3d59.918138549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1599414503100!5m2!1sen!2sse" width="800" height="600" frameborder="0" style={{ border: 'none'  }} allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                <div className="container">
                    <form className="contact-form">
                        <div className="contact-header d-flex flex-column py-4 flex-md-row justify-content-between">
                            <span className="d-flex align-items-center mb-3 mb-md-0">
                                <i className="fas fa-home custom-contact-icon text-theme-color"></i>
                                <span>
                                    <p>252, Chagalnaiya</p>
                                    <p>Feni-2500, Bangladesh</p>
                                </span>
                            </span>
                            <span className="d-flex align-items-center mb-3 mb-md-0">
                                <i className="fas fa-phone-volume custom-contact-icon text-theme-color"></i>
                                <span>
                                    <p>+880-123456789</p>
                                    <p>+880-123456789</p>
                                </span>
                            </span>
                            <span className="d-flex align-items-center">
                                <i className="fas fa-envelope-open-text custom-contact-icon text-theme-color"></i>
                                <span>
                                    <p>vanilla@website.com</p>
                                    <p>info@website.com</p>
                                </span>
                            </span>
                        </div>
                        <hr className="header-breaker" />
                        <div className="row contact-content">
                            <div className="col-12 col-md-6">
                                <h3 className="text-size-24 weight-medium text-theme-color mb-4">Get in Touch</h3>
                                <p>We have world-className, flexible support via live chat, email and phone. We guarantee that you’ll be able to have any issue resolved within 24 hours. You can contact support immediately here.</p>
                                <div className="mt-4 mb-4 mb-md-0">
                                    <span className="weight-bold">Follow us</span>
                                    <hr className="follow-hr" />
                                    <div className="text-theme-color mt-2">
                                        <i className="fab fa-facebook-f pr-2"></i>
                                        <i className="fab fa-twitter px-2"></i>
                                        <i className="fab fa-instagram px-2"></i>
                                        <i className="fab fa-pinterest-p px-2 text-white"></i>
                                        <i className="fab fa-youtube px-2"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <form>
                                    <input type="text" className="form-control custom-r-input" id="1" placeholder="Name" />
                                    <input type="email" className="form-control custom-r-input" id="1" placeholder="Email" />
                                    <input type="text" className="form-control custom-r-input" id="1" placeholder="Subject" />
                                    <textarea className="form-control" id="" rows="7" placeholder="Message"></textarea>
                                    <button className="btn custom-theme-btn send-btn">SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Brands  */}
                <Brands></Brands>
           
        </div>
    )
}
