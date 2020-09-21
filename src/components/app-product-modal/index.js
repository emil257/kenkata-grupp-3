import React from 'react'
import './index.css'

import ProductIcon from '../../assets/img/product-img/product-icon.png'
import Bexim from '../../assets/img/brands/Bexim.png'
import CompareIcon from '../../assets/img/product-img/product-options/compare.png'
import AddToWishlist from '../../assets/img/product-img/product-options/add-wishlist.png'

import ColorPicker from '../../assets/img/product-img/product-options/color-picker.png'
import InStock from '../../assets/img/product-img/in-stock.png'

export default function ProductModal({product}) {

    return (
        <div className="popup-window">
          <div className="popup-close d-flex align-items-center justify-content-center"><i className="fas fa-times"></i></div>
  
          <div className="row">
            <div className="product-prev col-12 col-xl-6">
              <img className="product-prev-focus" src={product.image} alt=""/>
              <img className="product-next-prev" src={ProductIcon} alt=""/>
              <img className="product-next-prev" src={ProductIcon} alt=""/>
              <img className="product-next-prev" src={ProductIcon} alt=""/>
              <img className="product-next-prev" src={ProductIcon} alt=""/>
            </div>
            <div className="product-desc col-12 col-xl-6">
              <span className="d-flex mb-3 justify-content-between">
                <div className="text-theme-color d-flex align-items-center">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <p className="ml-3 text-second-color">(2 customer reviews)</p>
                </div>
                <img className="brand-img-width" src={Bexim} alt=""/>
              </span>
              <h3 className="weight-medium text-theme-color text-size-24 mb-3">{product.name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
              <hr className="mt-4" />
              <div className="d-flex align-items-center mb-3">
                <span className="weight-medium text-theme-color text-size-24">${product.price - product.discount}.00</span>
                <span className="p-old-price ml-3">${product.price}.00</span>
                <img className="ml-4" src={InStock} alt="stock"/>
                <p className="ml-2">In stock</p>
              </div>
  
              <div className="d-flex">
                <div className="increase-qnt-btn-grp d-flex">
                  <button className="increase-qnt-btn-dec">-</button>
                  <span className="increase-qnt-num d-flex align-items-center">3</span>
                  <button className="increase-qnt-btn-inc">+</button>
                </div>
                <button className="btn custom-theme-btn s-offer-btn btn-add-cart mx-4 position-sticky">
                  <i className="fas fa-cart-plus mr-1"></i>
                  Add to cart
                </button>
                <img className="product-option-img mr-2" src={ColorPicker} alt="color"/>
                <img className="product-option-img d-none d-sm-block mr-2" src={CompareIcon} alt="comp"/>
                <img className="product-option-img" src={AddToWishlist} alt="add"/>
              </div>
              <p className="my-3">Category: <span className="text-theme-color">{product.data.category}</span></p>
              <p>Tags: 
                {
                  product.data.tags.map((t, index) => {
                  return (<span key={index} className="product-tag ml-2">{t}</span>)
                  })
                }
              </p>
              <div className="d-flex align-items-center mt-3">
                  <p className="mr-2">Share:</p> 
                  <button className="media-share-btn media-fb">
                    <i className="fab fa-facebook-f px-1"></i>
                  </button>
                  <button className="media-share-btn media-twitter">
                    <i className="fab fa-twitter px-1"></i>
                  </button>
                  <button className="media-share-btn media-pine">
                    <i className="fab fa-pinterest-p px-1"></i>
                  </button>
                  <button className="media-share-btn media-linked">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                  <button className="media-share-btn media-mail">
                    <i className="fas fa-envelope"></i>
                  </button>
                
              </div>
            </div>
          </div>
        </div>
    )
}
