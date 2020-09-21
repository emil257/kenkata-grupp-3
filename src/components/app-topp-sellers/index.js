import React from 'react';
import './index.css'

import AppTopSellers from "../app-section-headers/top-sellers";
import Product1 from '../app-product/'

export default function Topsellers({handleOpenModal}) {
    return (
      <div>
        <div className="app-top-sellers">
          <div className="container">
            <AppTopSellers />
            <div className="product-container">
                <Product1 className="product-background main-seller" handleOpenModal={handleOpenModal}/>    
                <Product1 tag={'new'} className="product-background" handleOpenModal={handleOpenModal}/>    
                <Product1 tag={'sale'} className="product-background" handleOpenModal={handleOpenModal}/>
            </div>
          </div>
        </div>
      </div>
    );

}
