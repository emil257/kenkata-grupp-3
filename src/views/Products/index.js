import React from 'react'
import Subscribe from '../../components/app-subscribe/index'
import Brands from '../../components/app-brands/index'
import NavigationProductsView from '../../components/app-navigation/app-navigation-products-view/index'
import ProductSection from '../../components/app-product-section/index'
import AppProductReview from '../../components/app-product-reviews/index'
import Shipping from '../../components/app-shipping-dark/index'

export default function index() {
    return (
        <div>

            <NavigationProductsView></NavigationProductsView>
            <ProductSection></ProductSection>
            <AppProductReview></AppProductReview>
            <Shipping></Shipping>
            <Subscribe></Subscribe>
            <Brands></Brands>
            
        </div>
    )
}
