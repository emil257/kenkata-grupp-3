import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./index.css";
import './shop-styles.css'
import Boxim from "../../assets/img/brands/Bexim.png";
import Product1 from "../../assets/img/product-img/product-1.png";
import AppProductModal from '../app-product-modal'

import { Modal } from '@material-ui/core'


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
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  if(props.product != null){
    return (
        <div className={props.className}>
          <Modal open={open} onClose={handleClose} className="d-flex align-items-center justify-content-center popup-bg-color">
            <AppProductModal/>
          </Modal>
          { tag(props.tag) }
          <img className="product-image" src={props.product.image} alt="" />
          <div className="product-footer">
            <p>Men's denim shirts full</p>
          </div>

          <div className="product-overlay">
            <div className="product-overlay-info">
              <p className="mb-1">New look men's sneakers</p>
              <span className="c-item-tag">Travel</span>
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
                onClick={handleOpen}
              ></i>
            </div>
          </div>
        </div>
  );
  } else {
    return(
      <div className={props.className}>  
        <Modal open={open} onClose={handleClose} className="d-flex align-items-center justify-content-center popup-bg-color">
          <AppProductModal/>
        </Modal>
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
              onClick={handleOpen}
            ></i>
          </div>
        </div>
      </div>
    )
  }
  
}
