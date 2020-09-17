import React from 'react'
import Shipping from '../../components/app-shipping/index'
import Subscribe from '../../components/app-subscribe/index'
import Brands from '../../components/app-brands/index'
import NavigationProductsView from '../../components/app-navigation/app-navigation-products-view/index'
import ProductSection from '../../components/app-product-section/index'



export default function index() {
    return (
        <div>
            <NavigationProductsView></NavigationProductsView>
            <ProductSection></ProductSection>
            <Shipping></Shipping>
            <Subscribe></Subscribe>
            <Brands></Brands>
            
        </div>
    )
}
