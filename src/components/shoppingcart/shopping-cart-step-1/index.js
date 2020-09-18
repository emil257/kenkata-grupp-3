import React from 'react'
import ShoppingCartCurrentStep from '../shopping-cart-current-step'
import ShoppingCartItem from '../shopping-cart-item/index'
import './index.css'
import YouMayAlsoLikeSwiper from '../../app-you-may-also-like/index'

export default function index() {
    
    return ( 
        <div>
            <ShoppingCartCurrentStep step={1}></ShoppingCartCurrentStep>
            <div className="container mt-5">
                <div className="row">
                <div className="cart-products col-12 col-lg-8">
                    <span className="d-flex justify-content-between weight-bold text-size-18 px-3">
                    <p className="ml-5">Product</p>
                    <p>
                        <span>Price</span>
                        <span className="mx-5">Quantity</span>
                        <span>Subtotal</span>
                    </p>
                    </span>
                    <hr className="cart-products-hr-top" />
                    <ShoppingCartItem></ShoppingCartItem>
                    <hr className="cart-products-hr-breaker" />
                    <ShoppingCartItem></ShoppingCartItem>
                    <hr className="cart-products-hr-breaker" />
                    <ShoppingCartItem></ShoppingCartItem>
                    <hr className="cart-products-hr-breaker" />
                    <ShoppingCartItem></ShoppingCartItem>
                    <hr className="cart-products-hr-breaker" />
                    <div className="cart-footer d-flex flex-column flex-lg-row justify-content-between">
                    <div className="coupon">
                        <p className="mb-4">If you have a coupon code, please apply it below.</p>
                        <div className="contact-input-grp">
                        <input type="text" className="form-control contact-input" placeholder="Coupon code" />
                        <button className="contact-input-btn">Apply</button>
                        </div>
                    </div>
                    <button className="btn custom-theme-btn btn-second-color text-size-18 btn-update mt-3 mt-lg-0">
                        UPDATE CART
                    </button>
                    </div>
                </div>

                <div className="col-12 col-lg-4 mt-4">
                    <div className="cart-total">
                    <div className="cart-total-header d-flex align-items-center justify-content-center">
                        <p className="weight-medium text-size-24">CART TOTALS</p>
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
                            <label className="form-check-label custom-shipping-label" htmlFor="payment2">
                                Flat rate: <span className="text-theme-color">$20.00</span>
                            </label>
                            <input className="form-check-input custom-shipping-radio" type="radio" name="payment" id="payment2" value="p2" />
                            </div>
                            <div className="form-check mb-1">
                            <label className="form-check-label custom-shipping-label" htmlFor="payment2">
                                Free shipping
                            </label>
                            <input className="form-check-input custom-shipping-radio" type="radio" name="payment" id="payment2" value="p2" />
                            </div>
                            <div className="form-check mb-1">
                            <label className="form-check-label custom-shipping-label" htmlFor="payment2">
                                Local pickup: <span className="text-theme-color">$25.00</span>
                            </label>
                            <input className="form-check-input custom-shipping-radio" type="radio" name="payment" id="payment2" value="p2" />
                            </div>
                            <p className="mb-1">Shipping to <span className="text-grey-color">AL</span></p>
                            <p>Change adress</p>
                        </span>
                        </span>
                        <hr />
                        <span className="d-flex align-items-center justify-content-between text-size-18">
                        <p className="weight-bold">TOTAL</p>
                        <p className="weight-bold text-theme-color">$930.00</p>
                        </span>
                        <button className="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
                        PROCEED TO CHECKOUT
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <YouMayAlsoLikeSwiper />
        </div>
        
    )
}
