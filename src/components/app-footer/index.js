import React from 'react'
import './index.css'

import footerLogo from '../../assets/img/footer-logo.png'
import recentInstagram from '../../assets/img/recent-instagram.png'
import paymentSystems from '../../assets/img/payment-systems.png'

export default function index() {
  return (
    <div>
      <div className="app-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <img src={footerLogo} alt="footer logo" className="mb-5" />
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
                <span>Follow us</span>
                <hr />
                <div className="text-theme-color mt-2">
                  <i className="fab fa-facebook-f pr-2"></i>
                  <i className="fab fa-twitter px-2"></i>
                  <i className="fab fa-instagram px-2"></i>
                  <i className="fab fa-pinterest-p px-2"></i>
                  <i className="fab fa-youtube px-2"></i>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0 col-xl-2 footer-top-contact-info">
                <h5 className="text-theme-color">CONTACT INFO</h5>
                <div>
                  <p className="text-theme-color">Adress:</p>
                  <p>Solna Business Park</p>
                  <p>Feni-2500, Stockholm</p>
                </div>
                <div className="mt-3">
                  <p className="text-theme-color">Phone:</p>
                  <p>+08-123456789</p>
                  <p>+08-123456789</p>
                </div>
                <div className="mt-3">
                  <p className="text-theme-color">Email:</p>
                  <p>support@website.com</p>
                  <p>info@website.com</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-xl-0 col-xl-2 offset-xl-1">
                <h5 className="text-theme-color">USEFUL LINKS</h5>
                <ul className="useful-links">
                  <li><a href="#policy">Privacy Policy</a></li>
                  <li><a href="#policy">Teams & Conditions</a></li>
                  <li></li>
                  <li><a href="#policy">Our Sitemap</a></li>
                  <li><a href="#policy">Latest News</a></li>
                  <li><a href="#policy">Returns</a></li>
                </ul>
              </div>
              <div className="col-md-6 mt-4 mt-xl-0 col-xl-3 offset-xl-1">
                <h5 className="text-theme-color">RECENT INSTAGRAM</h5>
                <img src={recentInstagram} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container d-flex flex-column-reverse flex-md-row align-items-center h-100 justify-content-md-between py-3 py-md-0">
            <p className="mt-2 mt-md-0">© Copyright 2020 KenKata</p>
            <img className="footer-payment-img" src={paymentSystems} alt="payments" />
          </div>
        </div>
      </div>
    </div>
  )
}
