import React, { useEffect } from "react";
import "./index.css";

// import ProductPreLarge from "../../assets/img/product-img/product-pre-large.png";
import ProductIcon from "../../assets/img/product-img/product-icon.png";
import ColorPicker from "../../assets/img/product-img/product-options/color-picker.png";
import Compare from "../../assets/img/product-img/product-options/compare.png";
import AddWishlist from "../../assets/img/product-img/product-options/add-wishlist.png";
import InStock from "../../assets/img/product-img/in-stock.png";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from "../../store/actions/products";


export default function Product() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.currentProduct)

  // GET PRODUCT BY ID
  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="product-prev col-12 col-md-10 offset-md-1 offset-lg-0 col-lg-6">
            <img className="product-prev-focus" src={product.image} alt="" />
            <img className="product-next-prev" src={ProductIcon} alt="" />
            <img className="product-next-prev" src={ProductIcon} alt="" />
            <img className="product-next-prev" src={ProductIcon} alt="" />
            <img className="product-next-prev" src={ProductIcon} alt="" />
          </div>
          <div className="product-desc col-12 col-md-10 offset-md-1 offset-lg-0 col-lg-6 mt-5 mt-lg-0">
            <h3 className="weight-medium text-theme-color text-size-24 mb-3">
              {product.name}
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.
            </p>
            <hr className="mt-4" />
            <div className="d-flex align-items-center mb-3">
              <span className="weight-medium text-theme-color text-size-24">
              ${ product.price - product.discount }.00
              </span>
              <span className="p-old-price ml-3">${product.price}</span>
              <img className="ml-4" src={InStock} alt="stock" />
              <p className="ml-2">In stock</p>
            </div>

            <div className="d-flex flex-column flex-md-row">

              <div className="increase-qnt-btn-grp d-flex">
                <button className="increase-qnt-btn-dec">-</button>
                <span className="increase-qnt-num d-flex align-items-center">
                  3
                </span>
                <button className="increase-qnt-btn-inc">+</button>
              </div>

              <button className="btn custom-theme-btn btn-add-cart mx-3 my-3 my-md-0">
                <i className="fas fa-cart-plus mr-1"></i>
                Add to cart
              </button>

              <div>
                <img
                  className="product-option-img mr-2"
                  src={ColorPicker}
                  alt="color"
                />
                <img
                  className="product-option-img mr-2"
                  src={Compare}
                  alt="comp"
                />
                <img
                  className="product-option-img"
                  src={AddWishlist}
                  alt="add"
                />
              </div>
            </div>

            <p className="my-3">
              Category: <span className="text-theme-color">Shoes</span>
            </p>
            <p>
              Tags:
              <span className="product-tag ml-3">Fashion</span>
              <span className="product-tag ml-2">Shoes</span>
              <span className="product-tag ml-2">Sneakers</span>
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
    </div>
  );
}
