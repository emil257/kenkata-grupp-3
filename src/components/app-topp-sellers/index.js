import React from 'react';
import './index.css'

import AppTopSellers from "../app-section-headers/top-sellers";
import Product from '../app-product/'
import { useSelector } from 'react-redux';

export default function Topsellers({handleOpenModal}) {

  const product1 = useSelector(state => state.products.products[0])


    return (
      <div>
        <div className="app-top-sellers">
          <div className="container">
            <AppTopSellers />
            <div className="product-container">
                <Product className="product-background main-seller" handleOpenModal={handleOpenModal}/>    
                <Product tag={'new'} className="product-background" handleOpenModal={handleOpenModal}/>    
                <Product tag={'sale'} className="product-background" handleOpenModal={handleOpenModal}/>
            </div>
          </div>
        </div>
      </div>
    );

}
