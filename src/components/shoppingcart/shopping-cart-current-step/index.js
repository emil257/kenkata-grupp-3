import React from 'react'
import './index.css'
import { Link } from "react-router-dom";

export default function index() {
    // props: ['step']
    return (
        <div>
            <div class="step-bg d-flex align-items-center justify-content-center">
                <span class="weight-medium d-flex flex-column flex-sm-row align-items-center" v-if="step == 1">
                <span class="text-theme-color">Shopping Cart</span>
                <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
                <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
                <Link class="text-white" to="/shoppingcart/checkout">Checkout</Link>
                <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
                <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
                <span>Order Complete</span>
                </span>
            </div>
        </div>
    )
}
