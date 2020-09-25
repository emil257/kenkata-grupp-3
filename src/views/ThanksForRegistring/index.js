import React from "react";
import "./index.css"

export default function Index() {
  return (
    <div className="col-12 col-lg-6">
      <div className="order-summary">
        <div className="order-header d-flex align-items-center justify-content-center">
          <p className="weight-medium text-size-24">CART TOTALS</p>
        </div>
        <div className="order-content">
          
          <button className="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
