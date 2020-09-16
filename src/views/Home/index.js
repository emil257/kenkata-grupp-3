import React from 'react'

import Banner from '../../components/app-banner/index'
import ShopByCatHeader from '../../components/app-section-headers/shop-by-category/index.js'
import NewArrivalsHeader from '../../components/app-section-headers/new-arrivals'
import FeaturedProductsHeader from '../../components/app-section-headers/featured-products/index'
import TopSellersHeader from '../../components/app-section-headers/top-sellers/index'
import LatestBlogHeader from '../../components/app-section-headers/latest-blog/index'
import YouMayAlsoLikeHeader from '../../components/app-section-headers/you-may-also-like/index'
import RelatedProductsHeader from '../../components/app-section-headers/related-products/index'
import Shipping from '../../components/app-shipping/index'
import CustomerBanner from '../../components/app-customer-banner'
import FlashSaleBanner from '../../components/app-flash-sale-banner'
import Subscribe from '../../components/app-subscribe/index'
import AppReviews from '../../components/app-reviews/index'
import ShopCategory from "../../components/app-shop-category/index";
import Brands from '../../components/app-brands'
import TopSeller from '../../components/app-topp-sellers'
import AppLatestBlog from '../../components/app-latest-blog/index'



export default function index() {
  return (
    <div>

      <Banner></Banner>
      
      <ShopByCatHeader></ShopByCatHeader>

      

      <NewArrivalsHeader></NewArrivalsHeader>
      <FeaturedProductsHeader></FeaturedProductsHeader>
      <TopSellersHeader></TopSellersHeader>
      <LatestBlogHeader></LatestBlogHeader>
      <Subscribe></Subscribe>
      <AppReviews></AppReviews>
      <YouMayAlsoLikeHeader></YouMayAlsoLikeHeader>
      <RelatedProductsHeader></RelatedProductsHeader>
      <Shipping />
      <FlashSaleBanner />
      <AppLatestBlog></AppLatestBlog>
      <TopSeller />
      <CustomerBanner />
      <ShopCategory></ShopCategory>
      <Brands></Brands>

      
    </div>
  );
}
