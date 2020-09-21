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
        <div className="container-fluid">
          <div className="row justify-content-center">
            {/* Item 1 */}
            <div className="app-feature col-md-6 col-lg-3 mb-5">
              <div className="d-flex">
                <img className="theme-color icons" src={shipping} alt="shipping" />
                <span>
                  <p className="app-feature-title text-theme-color text-left ml-4">Free shipping</p>
                  <p className="text-left ml-4">For a local customer, we provide free shipping facility</p>
                </span>
              </div>
            </div>
            {/* Item 2 */}
            <div className="app-feature col-md-6 col-lg-3 mb-5">
              <div className="d-flex">
                <img className="theme-color icons" src={support} alt="support" />
                <span>
                  <p className="app-feature-title text-theme-color text-left ml-4">24/7 support</p>
                  <p className="text-left ml-4">For any inquiry, we are available 24 hours every day</p>
                </span>
              </div>
            </div>
            {/* Item 3 */}
            <div className="app-feature col-md-6 col-lg-3 mb-5">
              <div className="d-flex">
                <img className="theme-color icons" src={payment} alt="payment" />
                <span>
                  <p className="app-feature-title text-theme-color text-left ml-4">Online payment</p>
                  <p className="text-left ml-4">You can pay quickly and easily with our online payment system</p>
                </span>
              </div>
            </div>
            {/* Item 4 */}
            <div className="app-feature col-md-6 col-lg-3 mb-5">
              <div className="d-flex">
                <img className="theme-color icons" src={delivery} alt="delivery" />
                <span>
                  <p className="app-feature-title text-theme-color text-left ml-4">Fast delivery</p>
                  <p className="text-left ml-4">We understand your urgency and we deliver in a fast way</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}