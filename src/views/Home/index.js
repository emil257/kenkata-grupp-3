import React from 'react'

import Banner from '../../components/app-banner/index'
import ShopByCatHeader from '../../components/app-section-headers/shop-by-category/index.js'
import NewArrivalsHeader from '../../components/app-section-headers/new-arrivals'
import FeaturedProductsHeader from '../../components/app-section-headers/featured-products/index'
import TopSellersHeader from '../../components/app-section-headers/top-sellers/index'
import LatestBlogHeader from '../../components/app-section-headers/latest-blog/index'
import YouMayAlsoLikeHeader from '../../components/app-section-headers/you-may-also-like/index'
import RelatedProductsHeader from '../../components/app-section-headers/related-products/index'


export default function index() {
  return (
    <div>
      
    <Banner></Banner>
    <ShopByCatHeader></ShopByCatHeader>
    <NewArrivalsHeader></NewArrivalsHeader>
    <FeaturedProductsHeader></FeaturedProductsHeader>
    <TopSellersHeader></TopSellersHeader>
    <LatestBlogHeader></LatestBlogHeader>
    <YouMayAlsoLikeHeader></YouMayAlsoLikeHeader>
    <RelatedProductsHeader></RelatedProductsHeader>

    </div>
  )
}
