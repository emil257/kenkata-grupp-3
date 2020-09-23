import React from "react";
import ShoppingCartCurrentStep from "../shopping-cart-current-step";
import ShoppingCartItem from "../shopping-cart-item/index";
import {Link} from 'react-router-dom'
import "./index.css";
import YouMayAlsoLikeSwiper from "../../app-you-may-also-like/index";

import {useSelector} from 'react-redux'


export default function Shoppingcart() {

  const cartItems = useSelector(state => state.products.cart)

  
  return (
    <div>
      <ShoppingCartCurrentStep step={1}></ShoppingCartCurrentStep>
      <div className="container cart-products mt-5">
        <div className="row">
          <div className="col-lg-8">
            <span className="weight-bold text-size-18 px-3">
              <div className="grid-wrapper-cart-step-1">
                <div className="grid-item-1">
                  <p className="font-size-smaller">Product</p>
                </div>
                <div className="grid-item-2">
                  <p className="font-size-smaller">Price</p>
                </div>
                <div className="grid-item-3">
                  <p className="font-size-smaller">Quantity</p>
                </div>
                <div className="grid-item-4">
                  <p className="font-size-smaller">Subtotal</p>
                </div>
        
              </div>
            </span>


            {
              cartItems.map(i => {
                return (
                  <div key={i._id}>
                    <hr className="cart-products-hr-top" />
                    <ShoppingCartItem product={i}></ShoppingCartItem>
                  </div>
                )
              })
            }

            <hr className="cart-products-hr-breaker" />
            <div className="cart-footer d-flex flex-column flex-lg-row justify-content-between">
              <div className="coupon">
                <p className="mb-4">
                  If you have a coupon code, please apply it below.
                </p>
                <div className="contact-input-grp">
                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="Coupon code"
                  />
                  <button className="contact-input-btn">Apply</button>
                </div>
              </div>
              <button className="btn custom-theme-btn btn-second-color text-size-18 btn-update mt-3 mt-lg-0">
                UPDATE CART
              </button>
            </div>
          </div>
          {/* Cart Total Box */}
          <div className="col-lg-4 mt-4">
            <div className="cart-total">
              <div className="cart-total-header d-flex align-items-center justify-content-center">
                <p className="weight-medium text-size-24">CART TOTAL</p>
              </div>
              <div className="cart-total-content">
                <span className="d-flex align-items-center justify-content-between">
                  <p className="weight-bold">Subtotal</p>
                  <p className="weight-bold text-theme-color">$910.00</p>
                </span>
                <hr />
                <span className="d-flex align-items-center justify-content-between">
                  <p className="weight-bold">Shipping</p>
                  <span className="text-right">
                    <div className="form-check mb-1">
                      <label
                        className="form-check-label custom-shipping-label"
                        htmlFor="payment2"
                      >
                        Flat rate:{" "}
                        <span className="text-theme-color">$20.00</span>
                      </label>
                      <input
                        className="form-check-input custom-shipping-radio"
                        type="radio"
                        name="payment"
                        id="payment2"
                        value="p2"
                      />
                    </div>
                    <div className="form-check mb-1">
                      <label
                        className="form-check-label custom-shipping-label"
                        htmlFor="payment2"
                      >
                        Free shipping
                      </label>
                      <input
                        className="form-check-input custom-shipping-radio"
                        type="radio"
                        name="payment"
                        id="payment2"
                        value="p2"
                      />
                    </div>
                    <div className="form-check mb-1">
                      <label
                        className="form-check-label custom-shipping-label"
                        htmlFor="payment2"
                      >
                        Local pickup:{" "}
                        <span className="text-theme-color">$25.00</span>
                      </label>
                      <input
                        className="form-check-input custom-shipping-radio"
                        type="radio"
                        name="payment"
                        id="payment2"
                        value="p2"
                      />
                    </div>
                    <p className="mb-1">
                      Shipping to <span className="text-grey-color">AL</span>
                    </p>
                    <p>Change adress</p>
                  </span>
                </span>
                <hr />
                <span className="d-flex align-items-center justify-content-between text-size-18">
                  <p className="weight-bold">TOTAL</p>
                  <p className="weight-bold text-theme-color">$930.00</p>
                </span>
                <Link to="/checkout">
                  <button className="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <YouMayAlsoLikeSwiper />
    </div>
  );
}
