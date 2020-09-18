import React from 'react';
import './index.css'

import AppTopSellers from "../app-section-headers/top-sellers";
import Product1 from '../app-product/'

export default function index() {
    return (
      <div>
        <div className="app-top-sellers">
          <div className="container">
            <AppTopSellers />
            <div className="product-container">
                <Product1 className="product-background main-seller"/>    
                <Product1 tag={'new'} className="product-background"/>    
                <Product1 tag={'sale'} className="product-background"/>
            </div>
          </div>
        </div>
      </div>
    );

}
