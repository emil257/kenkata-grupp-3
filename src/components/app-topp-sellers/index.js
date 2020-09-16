import React from 'react';
import './index.css'

import AppSectionHeader from "../app-section-headers/top-sellers";
import Product1 from '../app-product/'

export default function index() {
    return (
      <div>
        <div className="app-top-sellers">
          <div className="container">
            <AppSectionHeader />
            <div className="product-container">
                <Product1 className="product-background main-seller"/>    
<<<<<<< HEAD
                <Product1 className="product-background"/>    
                <Product1 className="product-background"/>                    
=======
                <Product1 tag={'new'} className="product-background"/>    
                <Product1 tag={'sale'} className="product-background"/>    
>>>>>>> 485e1447b2286a37375da7c53ad627725b98c5e0
              
            </div>
          </div>
        </div>
      </div>
    );

}
