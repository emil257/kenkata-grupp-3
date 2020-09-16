import React from 'react';
import './index.css'

import AppSectionHeader from "../app-section-headers/top-sellers";
import Product1 from '../app-product/index'

export default function index() {
    return (
      <div>
        <div className="app-top-sellers">
          <div className="container">
            <AppSectionHeader />
            <div className="product-container">
                <Product1 className="main-seller" />    
              
            </div>
          </div>
        </div>
      </div>
    );

}
