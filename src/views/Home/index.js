import React from "react";

import Shipping from "../../components/app-shipping/index";
import CustomerBanner from "../../components/app-customer-banner";
import FlashSaleBanner from "../../components/app-flash-sale-banner";
import Banner from "../../components/app-banner/index";
import ShopCategory from "../../components/app-shop-category/index";

export default function index() {
  return (
    <div>
      <Banner></Banner>
      <ShopCategory></ShopCategory>
      <Shipping />
      <FlashSaleBanner />
      <CustomerBanner />
    </div>
  );
}
