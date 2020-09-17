import React from "react";

import Banner from '../../components/app-banner/index'
import Shipping from '../../components/app-shipping/index'
import DiscountBanner from '../../components/app-discount-banner'
import FlashSaleBanner from '../../components/app-flash-sale-banner'
import Subscribe from '../../components/app-subscribe/index'
import AppReviews from '../../components/app-reviews/index'
import ShopCategory from "../../components/app-shop-category/index";
import Brands from "../../components/app-brands";
import TopSeller from "../../components/app-topp-sellers";
import AppLatestBlog from "../../components/app-latest-blog/index";
import AppFeaturedProducts from '../../components/app-featured-products/index'

import NewArivalsCarousel from "../../components/app-new-arrivals-carousel";

export default function index() {
  return (
    <div>
      <Banner></Banner>
      <Shipping />
      <ShopCategory></ShopCategory>
      <NewArivalsCarousel></NewArivalsCarousel>
      <DiscountBanner></DiscountBanner>
      <AppFeaturedProducts></AppFeaturedProducts>
      <FlashSaleBanner />
      <TopSeller />
      <AppReviews></AppReviews>
      <AppLatestBlog></AppLatestBlog>
      <Subscribe></Subscribe>
      <Brands></Brands>
    </div>
  );
}
