import React from "react";
import {Link} from "react-router-dom"
import "./index.css";
import './shop-styles.css'
import Boxim from "../../assets/img/brands/Bexim.png";
import Product1 from "../../assets/img/product-img/product-1.png";
import ReactTooltip from 'react-tooltip';
import Ellipses from '../../assets/img/feature-icons/ellipses.png'


const tag = (t) => {
  switch(t){
    case 'new':
      return (
        <div className="p-tag p-tag-new d-flex align-items-center justify-content-center">
          <p>NEW</p>
        </div>
      )
    case 'hot':
      return (
        <div className="p-tag p-tag-hot d-flex align-items-center justify-content-center">
          <p>HOT</p>
        </div>
      )
    case 'sale':
      return (
        <div className="p-tag p-tag-sale d-flex align-items-center justify-content-center">
          <p>-20%</p>
        </div>
      )
    case 'brand': 
      return (
        <div className="product-brand">
          <img className="product-brand-img" src={Boxim} alt="Boxim" />
        </div>  
      )
    default:
      return null
  }
  
}

export default function Product(props) {


  if(props.product !== undefined){
    return (
        <div className={props.className}>
          
          { tag(props.tag) }
          <img className="product-image" src={props.product.image} alt="" />
          <div className="product-footer">
            <p>{props.product.name}</p>
          </div>

          <div className="product-overlay">
            <div className="product-overlay-info">
              <p className="mb-1">{props.product.name}</p>
              <span className="c-item-tag">{props.product.data.tags[0]}</span>
              <p className="old-price">${ props.product.price }.00</p>
              <p className="new-price">${ props.product.price - props.product.discount }.00</p>
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
                to="/products"
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
                onClick={() => props.handleOpenModal(props.product)}
              ></i>
            </div>
          </div>
        </div>
  );
  } else {
    return(
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
            <p className="old-price">$200.00</p>
            <p className="new-price">$180.00</p>
          </div>
          <div className="r-stars product-overlay-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="product-overlay-controller d-flex align-items-center flex-column justify-content-between">

          <a data-tip data-for='color' className="fas fa-circle" data-place='left'></a>
          <ReactTooltip 
            id='color' 
            aria-haspopup='true' 
            className="light-background"
            effect='solid'
            >
            <img src={Ellipses} alt=""/>
          </ReactTooltip>

            <i
              className="text-danger fix-controll"
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
              to="/products"
              data-toggle="tooltip"
              data-placement="left"
              title="Quick view"
              className="fix-controll"
            >
              <i className="fas fa-search"></i>
            </Link>

            <a data-tip='Add to cart' className="fas fa-cart-plus" data-place='left'></a>
            
            <ReactTooltip
              className="fix-controll custom-theme"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to cart"
              onClick={() => props.handleOpenModal(props.product)}
            />
          </div>
        </div>
      </div>
    )
  }
  
}
