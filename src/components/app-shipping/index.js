import React from 'react';
import './index.css';

import shipping from '../../assets/img/feature-icons/shipping.svg'
import support from '../../assets/img/feature-icons/support.svg'
import payment from '../../assets/img/feature-icons/payment.svg'
import delivery from '../../assets/img/feature-icons/delivery.svg'



export default function index() {
    return (
      <div>
        <div className="app-features" id="shipping">
          <div className="app-features-container d-flex flex-column flex-xl-row justify-content-around align-items-center">
          <div className="d-flex flex-column flex-lg-row">
            <div className="app-feature d-flex mb-5 mb-xl-0">
              <img className="theme-color" src={shipping} alt="shipping" />
                <span>
                 <p className="app-feature-title text-theme-color">Free shipping</p>
                 <p>For a local customer, we provide free shipping facility</p>
                </span>
            </div>
              <div className="app-feature d-flex mb-5 ml-lg-5 mb-xl-0">
                <img className="theme-color" src={support} alt="support" />
                 <span>
                  <p className="app-feature-title text-theme-color">24/7 support</p>
                  <p>For any inquiry, we are available 24 hours every day</p>
                 </span>
              </div>
            </div>        
            <div className="d-flex flex-column flex-lg-row">
              <div className="app-feature d-flex mb-5 mb-lg-0 ml-xl-5 ">
                <img className="theme-color" src={payment} alt="payment" />
                <span>
                 <p className="app-feature-title text-theme-color">Online payment</p>
                 <p className="online-payment">You can pay quickly and easily with our online payment system</p>
                </span>
            </div>
            <div className="app-feature d-flex ml-lg-5">
              <img className="theme-color" src={delivery} alt="delivery"/>
                <span>
                  <p className="app-feature-title text-theme-color">Fast delivery</p>
                  <p>We understand your urgency and we deliver in a fast way</p>
                </span>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}