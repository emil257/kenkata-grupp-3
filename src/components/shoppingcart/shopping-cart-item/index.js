import React, { useEffect } from 'react'
import Remove from '../../../assets/img/shop-img/remove-icon.png'
import './index.css'

import { changeQnt,  removeFromCart, loadCartTotalItems, cartTotal } from '../../../store/actions/products'
import { useDispatch } from 'react-redux'

export default function Cartitem({product}) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCartTotalItems())
  })

  const handleDecQty = () => {
    dispatch(changeQnt(product._id, false))
    dispatch(cartTotal())
  }

  const handleIncQty = () => {
    dispatch(changeQnt(product._id, true))
    dispatch(cartTotal())
  }

  return (
    <div>
      <div id="desktop-cart-item">
        <div className="d-flex class align-items-center justify-content-between">
          <span className="d-flex align-items-center">
            <img src={Remove} alt="remove" className="mr-3 remove-logo" onClick={() => dispatch(removeFromCart(product._id))}/>
            <img src={product.product.image} alt="remove" className="mr-3 d-none d-sm-block image-of-products" onClick={() => dispatch(removeFromCart(product._id))}/>
            <p className="mx-2">{product.product.name}</p>
          </span>
          <span className="d-flex align-items-center">
            <p>${product.product.price - product.product.discount}.00</p>
            <div className="increase-qnt-btn-grp d-flex inc-button">
              {/* <button className="increase-qnt-btn-dec" onClick={() => dispatch(changeQnt(product._id, false))}>-</button> */}
              <button className="increase-qnt-btn-dec" onClick={() => handleDecQty()}>-</button>
              <span className="increase-qnt-num d-flex align-items-center">{product.quantity}</span>
              {/* <button className="increase-qnt-btn-inc" onClick={() => dispatch(changeQnt(product._id, true))}>+</button> */}
              <button className="increase-qnt-btn-inc" onClick={() => handleIncQty()}>+</button>
            </div>
            <p className="weight-bold text-theme-color">${(product.product.price - product.product.discount) * product.quantity}.00</p>
          </span>
        </div>
      </div>
     
      {/* Mobile Only */}
      <div className="container">
        <div id="mobile-cart-item">
          <div className="d-flex flex-column">
            <div className="d-flex">
              <p className="cart-item-title ml-2 text-dark font-weight-bold">{product.product.name}</p>
              <span><img className="remove-logo ml-3" src={Remove} alt="remove" /></span>
            </div>
            <div className="d-flex align-items-center">
              <img className="cart-item" src={product.product.image} alt="" />
              <div>
                <label htmlFor="quantity"></label>
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
