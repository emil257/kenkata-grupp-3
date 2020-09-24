import React from 'react'
import Remove from '../../../assets/img/shop-img/remove-icon.png'
import Product from '../../../assets/img/product-img/product-icon.png'
import Hoodie from '../../../assets/img/shoppingcart-items/hoodie_item.png'
import './index.css'

export default function Index() {
  return (
    <div>
      <div id="desktop-cart-item">
        <div className="d-flex class align-items-center justify-content-between">
          <span className="d-flex align-items-center">
            <img cl src={Remove} alt="remove" className="mr-3 remove-logo" />
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
     
      {/* Mobile Only */}
      <div className="container">
        <div id="mobile-cart-item">
          <div className="d-flex flex-column">
            <div className="d-flex">
              <p className="cart-item-title ml-2 text-dark font-weight-bold">Nike Club Hoodie</p>
              <span><img className="remove-logo ml-3" src={Remove} alt="remove" /></span>
            </div>
            <div className="d-flex align-items-center">
              <img className="cart-item" src={Hoodie} alt="" />
              <div>
                <label for="quantity"></label>
                <select className="form-control" id="select-quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              {/* Price */}
              <p className="text-dark ml-auto">$190.00</p>
            
              {/* Subtotal */}
              <p className="weight-bold text-theme-color ml-auto">$380.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
