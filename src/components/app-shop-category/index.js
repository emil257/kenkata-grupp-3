import React from 'react'
import './index.css'

export default function index() {
    return (
<div className="shop-category">
    <div className="container">
      <app-section-header first="SHOP BY" second="CATEGORY" desc="We always try to give you the best product within a fast and reliable way"></app-section-header>
      <div className="shop-category-grid">
        <div className="shop-category-item item-men">
          <div className="shop-category-footer"><p>Men</p></div>
        </div>
        <div className="shop-category-item item-women">
          <div className="shop-category-footer"><p>Women</p></div>
        </div>
        <div className="shop-category-item item-kids">
          <div className="shop-category-footer"><p>Kids</p></div>
        </div>
        <div className="shop-category-item item-shoes">
          <div className="shop-category-footer"><p>Shoes</p></div>
        </div>
        <div className="shop-category-item item-hats">
          <div className="shop-category-footer"><p>Hats</p></div>
        </div>
        <div className="shop-category-item item-sunglasses">
          <div className="shop-category-footer"><p>Sunglasses</p><p className="item-qnt">18 products</p></div>
        </div>
        <div className="shop-category-item item-watches">
          <div className="shop-category-footer"><p>Watches</p></div>
        </div>
      </div>
    </div>
  </div>
    )
}
