import React, { useEffect, useState, forwardRef }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../store/actions/products'

import { Modal } from '@material-ui/core'

import './index.css'

import bannerShoes from '../../assets/img/shop-img/banner-shoes.png'
import twoXthree from '../../assets/img/shop-img/2x3.png'
import oneXone from '../../assets/img/shop-img/1x1.png'
import threeXthree from '../../assets/img/shop-img/3x3.png'
import nextArrow from '../../assets/img/next-arrow.png'
// import prevArrow from '../../assets/img/prev-arrow.png'



// Components
import ProductFilters from '../../components/shop-components/app-shop-filters'
import Product from '../../components/app-product'
import Subscribe from '../../components/app-subscribe/index'
import Brands from '../../components/app-brands/index'
import AppProductModal from '../../components/app-product-modal'

export default function Shop() {

  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState({})

  const handleOpen = (product) => {
    setModalProduct(product)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const AppModalWithRef = forwardRef((props, ref) => {
    return (
      <AppProductModal {...props} innerRef={ref}/>
    )
  })

  return (
    <div>
      <Modal open={open} onClose={handleClose} className="d-flex align-items-center justify-content-center popup-bg-color">
        <AppModalWithRef product={modalProduct}/>
      </Modal>
      <div className="shop-banner">
        <div className="container d-flex flex-column flex-md-row align-items-lg-center justify-content-between">
          <div className="mt-5 mt-lg-0">
            <h1>
              New Customer
            </h1>
            <h1>
              Can Get <span className="text-theme-color">30% Off</span>
            </h1>
            <button className="btn custom-cta-btn btn-w-u mt-4">LEARN MORE</button>
          </div>

        <div className="">
          <img className="banner-img " src={bannerShoes} alt="shoes" />
        </div>

        </div>
      </div>

      <div className="shop">
        <div className="shop-header">
          <div className="container">
            <div className="shop-header-container d-flex align-items-center justify-content-between">
              <div>
                <h3 className="text-theme-color">Shop</h3>
                <p>Home / <span className="text-grey-color">Shop</span> </p>
              </div>
              <div className="d-flex">
                <div className="shop-header-option-block align-items-center d-none d-lg-flex"><p>Show: 9 / 12 / 18 / 24</p></div>
                <div className="shop-header-option-block d-flex align-items-center">
                  <img className="banner-img mr-3" src={twoXthree} alt="1"/>
                  <img className="banner-img mr-3" src={oneXone} alt="2"/>
                  <img className="banner-img" src={threeXthree} alt="3"/>
                </div>
                <div className="shop-header-option-block d-none d-md-flex align-items-center"><p>Default sorting <i className="fas fa-chevron-down fa-sm fa-lg ml-5"></i></p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 container d-flex flex-column flex-md-row align-items-center align-items-sm-start">
          <ProductFilters/>
          <div className="d-flex flex-column align-items-center">
            <div className="product-grid">
              
              {
                products.map(product => {
                  return (
                    <Product key={product._id} product={product} className="product-background" handleOpenModal={handleOpen}/>
                  )
                })
              }
            </div>
            <span className="mt-5 d-flex align-items-center">
              <span className="d-flex c-scroll-btn c-scroll-left align-items-center justify-content-center mr-3"><img src={nextArrow} alt="" /></span>
              <span className="product-page">8</span>
              <span className="product-page text-theme-color">9</span>
              <span className="product-page">10</span>
              <span className="product-page">...</span>
              <span className="product-page d-none d-sm-block">24</span>
              <span className="product-page">25</span>
              <span className="product-page d-none d-sm-block">26</span>
              <span className="d-flex c-scroll-btn c-scroll-right align-items-center justify-content-center ml-3"><img src={nextArrow} alt="" /></span>
            </span>
          </div>
        </div>
      <Subscribe></Subscribe>
      <Brands></Brands>
      </div>
  </div>
  )
}
