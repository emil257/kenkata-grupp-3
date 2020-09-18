import React from 'react'
import Remove from '../../../assets/img/shop-img/remove-icon.png'
import Product from '../../../assets/img/product-img/product-icon.png'
import './index.css'

export default function index() {
  return (
    <div>
      <div className="d-flex class align-items-center justify-content-between">
        <span className="d-flex align-items-center">
        <img src={Remove} alt="remove" className="mr-3" />
          <img src={Product} alt="remove" className="mr-3 d-none d-sm-block" />
          <p className="mx-2">Women smart high heel shoe</p>
        </span>
        <span className="d-flex align-items-center">
          <p>$190.00</p>
          <div className="increase-qnt-btn-grp d-flex inc-button">
            <button className="increase-qnt-btn-dec">-</button>
            <span className="increase-qnt-num d-flex align-items-center">3</span>
            <button className="increase-qnt-btn-inc">+</button>
          </div>
          <p className="weight-bold text-theme-color">$380.00</p>
        </span>
      </div>
    </div>
  )
}
