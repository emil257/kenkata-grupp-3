import React from "react";
import {Link} from "react-router-dom"
import "./index.css";
import Boxim from "../../assets/img/brands/Bexim.png";
import Product1 from "../../assets/img/product-img/product-1.png";

const tag = (t) => {
  switch(t){
    case 'new':
      return (
        <div className="p-tag p-tag-new d-flex align-items-center justify-content-center" v-if="tag == 1">
          <p>NEW</p>
        </div>
      )
    case 'hot':
      return (
        <div className="p-tag p-tag-hot d-flex align-items-center justify-content-center" v-if="tag == 2">
          <p>HOT</p>
        </div>
      )
    case 'sale':
      return (
        <div className="p-tag p-tag-sale d-flex align-items-center justify-content-center" v-if="tag == 3">
          <p>-20%</p>
        </div>
      )
    default:
      return (
        <div className="product-brand">
          <img className="product-brand-img" src={Boxim} alt="Boxim" />
        </div>  
      )
  }
}

export default function index(props) {
  return (
      <div className={props.className}>  

        { tag(props.tag) }
  


        <img className="product-image" src={Product1} alt="" />
        <div className="product-footer">
          <p>Men's denim shirts full</p>
        </div>

        <div className="product-overlay">
          <div className="product-overlay-info">
            <p className="mb-1">New look men's sneakers</p>
            <span className="c-item-tag">Travel</span>
            <p className="old-price">$220.00</p>
            <p className="new-price">$190.00</p>
          </div>
          <div className="r-stars product-overlay-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="product-overlay-controller d-flex align-items-center flex-column justify-content-between">
            <i
              className="fas fa-circle text-danger fix-controll"
              data-toggle="tooltip"
              data-placement="left"
              title="Color"
            ></i>
            <i
              className="far fa-heart fix-controll"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            ></i>
            <i
              className="fas fa-arrows-alt-h fix-controll"
              data-toggle="tooltip"
              data-placement="left"
              title="Compare"
            ></i>
            <Link
              to="/product"
              data-toggle="tooltip"
              data-placement="left"
              title="Quick view"
              className="fix-controll"
            >
              <i className="fas fa-search"></i>
            </Link>
            <i
              className="fas fa-cart-plus fix-controll"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to cart"
            ></i>
          </div>
        </div>
      </div>
  );
}
