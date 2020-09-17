import React from 'react'
import Shipping from '../../components/app-shipping/index'
import Subscribe from '../../components/app-subscribe/index'
import Brands from '../../components/app-brands/index'
import NavigationProductsView from '../../components/app-navigation/app-navigation-products-view/index'
import ProductSection from '../../components/app-product-section/index'
import AppProductReview from '../../components/app-product-reviews/index'
import ProductYouMayAlsoLike from '../../components/app-you-may-also-like/index'
import RelatedProducts from '../../components/app-related-products/index'

export default function index() {
    return (
        <div>
            <NavigationProductsView></NavigationProductsView>
            <ProductSection></ProductSection>
            <AppProductReview></AppProductReview>
            <Shipping></Shipping>
            <ProductYouMayAlsoLike></ProductYouMayAlsoLike>
            <RelatedProducts></RelatedProducts>
            <Subscribe></Subscribe>
            <Brands></Brands>
            
        </div>
    )
}
