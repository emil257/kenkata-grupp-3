import React from 'react'

export default function index() {
  return (
    <div className="product-carousel">
    <div className="container">
      {/* <app-section-header :first="first" :second="second" :desc="desc"></app-section-header> */}
          <div className="product-card">
            {/* <app-product tag="2"></app-product> */}
          </div>
          <div className="product-card">
            {/* <app-product ></app-product> */}
          </div>
          <div className="product-card">
            {/* <app-product tag="3"></app-product> */}
          </div>
          <div className="product-card">
            {/* <app-product></app-product> */}
          </div>

          {/* <template slot="next">
            <span className="blog-arrow c-scroll-btn c-scroll-right align-items-center justify-content-center c-next"><img src="@/assets/img/next-arrow.png" alt=""></span>
          </template>
          <template slot="prev">
            <span className="blog-arrow c-scroll-btn c-scroll-left align-items-center justify-content-center c-prev"><img src="@/assets/img/next-arrow.png" alt=""></span>
          </template> */}
    </div>
  </div>
  )
}
