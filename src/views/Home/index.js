import React from "react";

import Banner from "../../components/app-banner/index";
import NewArrivalsHeader from "../../components/app-section-headers/new-arrivals";
import FeaturedProductsHeader from "../../components/app-section-headers/featured-products/index";
import TopSellersHeader from "../../components/app-section-headers/top-sellers/index";
import LatestBlogHeader from "../../components/app-section-headers/latest-blog/index";
import YouMayAlsoLikeHeader from "../../components/app-section-headers/you-may-also-like/index";
import RelatedProductsHeader from "../../components/app-section-headers/related-products/index";
import Shipping from "../../components/app-shipping/index";
import CustomerBanner from "../../components/app-customer-banner";
import FlashSaleBanner from "../../components/app-flash-sale-banner";
import ShopCategory from "../../components/app-shop-category/index";
import Brands from '../../components/app-brands'

export default function index() {
  return (
    <div>
      <Banner></Banner>
      <ShopCategory></ShopCategory>
      <Shipping />
      <FlashSaleBanner />
      <CustomerBanner />
      <NewArrivalsHeader></NewArrivalsHeader>
      <FeaturedProductsHeader></FeaturedProductsHeader>
      <TopSellersHeader></TopSellersHeader>
      <LatestBlogHeader></LatestBlogHeader>
      <YouMayAlsoLikeHeader></YouMayAlsoLikeHeader>
      <RelatedProductsHeader></RelatedProductsHeader>
      <Brands></Brands>
    </div>
  );
}
