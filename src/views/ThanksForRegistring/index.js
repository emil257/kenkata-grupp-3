import React from "react";
import "./index.css"

export default function Index() {
  return (
    <div className="col-12 col-lg-6 card-margin">
      <div className="order-summary">
        <div className="order-header d-flex align-items-center justify-content-center">
          <p className="weight-medium text-size-24"> </p>
        </div>
        <div className="order-content">

          <div className="header-justify ">
            <div className="">
              <h2 className=" ">
                THANKS FOR REGISTRING
              </h2>
              <p className="">
                We hope you enjoy your shopping with us!
              </p>
            </div>
          </div>

          <button className="btn custom-theme-btn text-size-18 btn-p-t-c margin-button">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
