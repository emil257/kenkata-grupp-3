import React from 'react'
import './index.css'
import { Link } from "react-router-dom";

export default function index(props) {
    // props: ['step']

    const step = () => {
        if(props.step === 1){
            return (
                <span className="weight-medium d-flex flex-column flex-sm-row align-items-center">
                    <span className="text-theme-color">Shopping Cart</span>
                        <i className="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
                        <i className="fas fa-angle-down text-theme-color d-sm-none"></i>
                    <Link className="text-white" to="/checkout">Checkout</Link>
                        <i className="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
                        <i className="fas fa-angle-down text-theme-color d-sm-none"></i>
                    <span>Order Complete</span>
                </span>
            )
        }
        if(props.step === 2){
            return (
                <span className="weight-medium d-flex flex-column flex-sm-row align-items-center">
                    <Link className="text-white" to="/shoppingcart">Shopping Cart</Link>
                        <i className="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
                        <i className="fas fa-angle-down text-theme-color d-sm-none"></i>
                    <span className="text-theme-color">Checkout</span>
                        <i className="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
                        <i className="fas fa-angle-down text-theme-color d-sm-none"></i>
                    <span>Order Complete</span>
                </span>
            )
        }
    }


    return (
        <div>
            <div className="step-bg d-flex align-items-center justify-content-center">
                { step() }
            </div>
        </div>
    )
}
