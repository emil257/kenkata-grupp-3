import React from 'react'

import Banner from '../../components/app-banner/index'
import Shipping from '../../components/app-shipping/index'
import CustomerBanner from '../../components/app-customer-banner'
import FlashSaleBanner from '../../components/app-flash-sale-banner'


export default function index() {
  return (
    <div>
    <Banner />
    <Shipping />
    <FlashSaleBanner />
    <CustomerBanner />
    </div>
  )
}
