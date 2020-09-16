import React from 'react'

import './index.css'

import ColorCat from '../app-color-cat'

//Images
import Bexim from '../../../assets/img/brands/Bexim.png'
import Lighton from '../../../assets/img/brands/Lighton.png'
import Dismis from '../../../assets/img/brands/Dismis.png'
import Rosimo from '../../../assets/img/brands/Rosimo.png'
import Dallas from '../../../assets/img/brands/Dallas.png'
import ProductIcon from '../../../assets/img/product-img/product-icon.png'


export default function index() {
  return (
      <div className="mr-5">
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Product Categories</p>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">Men's</p>
          <span className="sorting-option-qnt">18</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">Women's</p>
          <span className="sorting-option-qnt">23</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">Kids</p>
          <span className="sorting-option-qnt">32</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">Hats</p>
          <span className="sorting-option-qnt">12</span>
        </div>
        <div className="sorting-option-category active d-flex justify-content-between">
          <p className="sorting-option-name">Sunglasses</p>
          <span className="sorting-option-qnt">15</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">Shoes</p>
          <span className="sorting-option-qnt">12</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">Watches</p>
          <span className="sorting-option-qnt">20</span>
        </div>
      </div>
      
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium mb-3">Filter by Price</p>
        <div className="form-group">
          <input type="range" className="form-control-range" />
        </div>
        <span className="d-flex justify-content-between">
          <p>Price: $0 - $10,000</p>
          <button className="btn price-filter-btn">Filter</button>
        </span>
      </div>

      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Filter by Color</p>
        <ColorCat color={'black'}/>
        <ColorCat color={'gray'}/>
        <ColorCat color={'red'}/>
        <ColorCat color={'green'}/>
        <ColorCat color={'orange'}/>
        <ColorCat color={'brown'}/>
      </div>

      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Filter by Size</p>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">XS</p>
          <span className="sorting-option-qnt">18</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">S</p>
          <span className="sorting-option-qnt">23</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">M</p>
          <span className="sorting-option-qnt">32</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">L</p>
          <span className="sorting-option-qnt">12</span>
        </div>
        <div className="sorting-option-category active d-flex justify-content-between">
          <p className="sorting-option-name">XL</p>
          <span className="sorting-option-qnt">15</span>
        </div>
        <div className="sorting-option-category d-flex justify-content-between">
          <p className="sorting-option-name">XXL</p>
          <span className="sorting-option-qnt">12</span>
        </div>
      </div>

      
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Filter by Brand</p>
        <div className="d-flex justify-content-between mt-3">
          <span className="brand-filter-span"><img src={Bexim} alt="" /></span>
          <span className="brand-filter-span"><img src={Lighton} alt=""/></span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="brand-filter-span"><img src={Dismis} alt="" /></span>
          <span className="brand-filter-span"><img src={Rosimo} alt="" /></span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="brand-filter-span"><img src={Dallas} alt="" /></span>
          <span className="brand-filter-span"><img src={Bexim} alt="" /></span>
        </div>
      </div>

      <div className="sorting-categories">
        <p className="text-theme-color weight-medium mb-2">Product Status</p>
        <div className="custom-control custom-checkbox mb-2">  
          <input type="checkbox" className="custom-control-input" id="sale" />  
          <label className="custom-control-label pl-1"  htmlFor="sale">On Sale</label>  
        </div>
        <div className="custom-control custom-checkbox">  
          <input type="checkbox" className="custom-control-input" id="stock" />  
          <label className="custom-control-label pl-1"  htmlFor="stock">In Stock</label>  
        </div>
      </div>
      
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Top Rated Products</p>
        <div className="d-flex align-items-center mt-2">
          <img className="product-icon-small" src={ProductIcon} alt="small product" />
          <div className="d-flex flex-column justify-content-between ml-2">
            <p>Circle pattern girls...</p>
            <div className="text-theme-color">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className="weight-medium">$190</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <img className="product-icon-small" src={ProductIcon} alt="small product"/>
          <div className="d-flex flex-column justify-content-between ml-2">
            <p>Circle pattern girls...</p>
            <div className="text-theme-color">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className="weight-medium">$190</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <img className="product-icon-small" src={ProductIcon} alt="small product"/>
          <div className="d-flex flex-column justify-content-between ml-2">
            <p>Circle pattern girls...</p>
            <div className="text-theme-color">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className="weight-medium">$190</p>
          </div>
        </div>
      </div>
    </div>
  )
}
