import React from "react";
import './index.css';
import Brands from '../../app-brands/index';
import ShoppingCartCurrentStep from '../shopping-cart-current-step';
import { useForm } from "react-hook-form";

export default function Index() {

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <ShoppingCartCurrentStep step={2}></ShoppingCartCurrentStep>
      <div className="container mt-5">
        <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <p className="returning-customer">
                Returning customer?{" "}
                <span className="text-theme-color">Click here to login</span>
              </p>
              <p className="returning-customer mt-3">
                Have a coupon?{" "}
                <span className="text-theme-color">
                  Click here to enter your code
            </span>
              </p>
              <div className="coupon mt-4">
                <p className="mb-4">
                  If you have a coupon code, please apply it below.
            </p>
                <div className="contact-input-grp">
                  <input type="text" className="form-control contact-input" placeholder="Coupon code"
                  />
                  <button className="contact-input-btn">Apply</button>
                </div>
              </div>

              {/* Form start */}
              <div className="mt-5">
                <h3 className="font-size-18">BILLING DETAILS</h3>
                <div className="form-row mt-4">
                  <div className="form-group col-6">
                    <label>
                      First name <span className="text-theme-color">*</span>
                    </label>
                    <input type="text" name="firstName" ref={register({ required: true, minLength: 2, maxLength: 20 })} className="form-control " />
                    {/* First name Required */}
                    {errors.firstName && errors.firstName.type === 'required' && (
                      <small className="invalid-checkout">Please enter your name</small>)}
                    {/* Min Length */}
                    {errors.firstName && errors.firstName.type === 'minLength' && (
                      <small className="invalid-checkout">This is not a real name</small>)}
                    {/* Max Length */}
                    {errors.firstName && errors.firstName.type === 'maxLength' && (
                      <small className="invalid-checkout">This name is too long</small>)}
                  </div>
                  <div className="form-group col-6">
                    <label>
                      Last name <span className="text-theme-color">*</span>
                    </label>
                    <input type="text" name="lastName" ref={register({ required: true, minLength: 2, maxLength: 20 })} className="form-control" />
                    {/* Last name Required */}
                    {errors.lastName && errors.lastName.type === 'required' && (
                      <small className="invalid-checkout">Please enter your last name</small>)}
                    {/* Min Length */}
                    {errors.lastName && errors.lastName.type === 'minLength' && (
                      <small className="invalid-checkout">This is not a real last name</small>)}
                    {/* Max Length */}
                    {errors.lastName && errors.lastName.type === 'maxLength' && (
                      <small className="invalid-checkout">This name is too long</small>)}
                  </div>
                </div>
                <div className="form-group">
                  <label>Company name (optional)</label>
                  {/* Company name */}
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>
                    Country / Region <span className="text-theme-color">*</span>
                  </label>
                  {/* Country */}
                  <select name="country" ref={register({ required: true })} className="form-control">
                    <option value="">Choose...</option>
                    <option value="United States">United States</option>
                    <option value="Sweden">Sweden</option>
                  </select>
                  {/* Country Required */}
                  {errors.country && <small className="invalid-checkout">Please select your country</small>}
                </div>
                <div className="form-group">
                  <label>
                    Street address <span className="text-theme-color">*</span>
                  </label>
                    {/* Street Address */}
                  <input type="text" name="address" ref={register({ required: true, minLength: 8 })} className="form-control" />
                  {/* Address Required */}
                  {errors.address && errors.address.type === 'required' && (
                    <small className="invalid-checkout">Please enter your street address</small>)}
                    {/* Min Length */}
                  {errors.address && errors.address.type === 'minLength' && (
                    <small className="invalid-checkout">This is not a real street address</small>)}
                </div>
                {/* <div className="form-group mt-4">
                  <input type="text" className="form-control" />
                </div> */}
                <div className="form-group">
                  <label>
                    Town / City <span className="text-theme-color">*</span>
                  </label>
                  {/* Town & City */}
                  <input type="text" name="city" ref={register({ required: true, minLength: 4 })} className="form-control" />
                  {/* City Required */}
                  {errors.city && errors.city.type === 'required' && (
                    <small className="invalid-checkout">Please enter your town/city</small>)}
                  {/* Min Length */}
                  {errors.city && errors.city.type === 'minLength' && (
                    <small className="invalid-checkout">This is not a real town or city</small>)}
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    State <span className="text-theme-color">*</span>
                  </label>
                  {/* State */}
                  <select id="state" name="state" ref={register({ required: true, minLength: 4 })} className="form-control">
                    <option value=""></option>
                    <option value="Texas">Texas</option>
                    <option value="Colorado">Colorado</option>
                  </select>
                  {/* State Required */}
                  {errors.state && <small className="invalid-checkout">Please select your state</small>}
                </div>
                <div className="form-group">
                  <label>
                    ZIP <span className="text-theme-color">*</span>
                  </label>
                  {/* ZIP */}
                  <input type="text" name="zip" ref={register({ required: true, minLength: 4 })} className="form-control" />
                  {/* Zip Required */}
                  {errors.zip && errors.zip.type === 'required' && (
                    <small className="invalid-checkout">Please enter your zip code</small>)}
                  {/* Min Length */}
                  {errors.zip && errors.zip.type === 'minLength' && (
                    <small className="invalid-checkout">This is not a valid zip code</small>)}
                </div>
                <div className="form-group">
                  <label>
                    Phone <span className="text-theme-color">*</span>
                  </label>
                  {/* Phone Number */}
                  <input type="text" name="phone" ref={register({ required: true, minLength: 6, maxLength: 12 })} className="form-control" />
                  {/* Phone Required */}
                  {errors.phone && errors.phone.type === 'required' && (
                    <small className="invalid-checkout">Please enter your phone number</small>)}
                  {/* Min Length */}
                  {errors.phone && errors.phone.type === 'minLength' && (
                    <small className="invalid-checkout">This is not a valid phone number</small>)}
                  {errors.phone && errors.phone.type === 'maxLength' && (
                    <small className="invalid-checkout">This phone number is too long</small>)}

                </div>
                <div className="form-group">
                  <label>
                    Email adress <span className="text-theme-color">*</span>
                  </label>
                  {/* Email */}
                  <input type="text" name="email" ref={register({ required: true, minLength: 7, pattern: { value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/ } })} className="form-control" />
                  {/* Email Required */}
                  {errors.email && errors.email.type === 'required' && (
                    <small className="invalid-checkout">Please enter a valid email address</small>)}
                  {/* Min Length */}
                  {errors.email && errors.email.type === 'minLength' && (
                    <small className="invalid-checkout">Please enter a valid email address</small>)}
                  {/* Valid Characters */}
                  {errors.email && errors.email.type === 'pattern' && (
                    <small className="invalid-checkout">Please enter a valid email address</small>)}
                </div>
                {/* Create an account? */}
                <div className="form-check mt-5">
                  <input className="form-check-input" ref={register({ required: false })} name="account" value={true} type="checkbox"/>
                  <label className="form-check-label">Create an account?</label>
                  {/* {errors.account && <small className="invalid-checkout">Please check or uncheck this input</small>} */}
                </div>
                {/* Ship to different address? */}
                <hr className="my-5" />
                <div className="form-check mb-4">
                  <input className="form-check-input" ref={register({ required: false })} name="differentAddress" value={true} type="checkbox" />
                  <label className="form-check-label text-size-18 weight-bold"htmlFor="gridCheck1">
                    SHIP TO DIFFERENT ADRESS?
                </label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Order notes (optional)
                </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Box Left */}
            <div className="col-lg-6">
              <div className="order-summary">
                <div className="order-header d-flex align-items-center justify-content-center">
                  <p className="weight-medium text-size-24">CART TOTALS</p>
                </div>
                <div className="order-content">
                  <span className="d-flex align-items-center justify-content-between weight-bold">
                    <p className=" text-theme-color">PRODUCT</p>
                    <p className=" text-theme-color">SUBTOTAL</p>
                  </span>
                  <hr />
                  <span className="d-flex align-items-center justify-content-between">
                    <p>Women smart high heel shoe</p>
                    <p>$380.00</p>
                  </span>
                  <hr />
                  <span className="d-flex align-items-center justify-content-between">
                    <p>Gents half t-shirt</p>
                    <p>$380.00</p>
                  </span>
                  <hr />
                  <span className="d-flex align-items-center justify-content-between">
                    <p>Gents winter yellow jacket</p>
                    <p>$380.00</p>
                  </span>
                  <hr />
                  <span className="d-flex align-items-center justify-content-between">
                    <p>Men's Watches Brown Leather</p>
                    <p>$380.00</p>
                  </span>
                  <hr />
                  <span className="d-flex align-items-center justify-content-between weight-medium">
                    <p className=" text-theme-color">Subtotal</p>
                    <p className=" text-theme-color">$930.00</p>
                  </span>
                  <hr />
                  <span className="d-flex align-items-center justify-content-between">
                    <p>Shipping</p>
                    <span className="text-right">
                      <div className="form-check mb-1">
                        <label
                          className="form-check-label custom-shipping-label"
                          htmlFor="payment2"
                        >
                          Flat rate:{" "}
                          <span className="text-theme-color">$20.00</span>
                        </label>
                        <input
                          className="form-check-input custom-shipping-radio"
                          type="radio"
                          name="payment"
                          id="payment2"
                          value="p2"
                        />
                      </div>
                      <div className="form-check mb-1">
                        <label
                          className="form-check-label custom-shipping-label"
                          htmlFor="payment2"
                        >
                          Free shipping
                    </label>
                        <input
                          className="form-check-input custom-shipping-radio"
                          type="radio"
                          name="payment"
                          id="payment2"
                          value="p2"
                        />
                      </div>
                      <div className="form-check mb-1">
                        <label
                          className="form-check-label custom-shipping-label"
                          htmlFor="payment2"
                        >
                          Local pickup:{" "}
                          <span className="text-theme-color">$25.00</span>
                        </label>
                        <input
                          className="form-check-input custom-shipping-radio"
                          type="radio"
                          name="payment"
                          id="payment2"
                          value="p2"
                        />
                      </div>
                    </span>
                  </span>
                  <hr />
                  <span className="d-flex align-items-center justify-content-between weight-bold text-size-18">
                    <p className=" text-theme-color">TOTAL</p>
                    <p className=" text-theme-color">$930.00</p>
                  </span>
                  <hr />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment1"
                      value="p1"
                    />
                    <label className="form-check-label" htmlFor="payment1">
                      Direct bank transfer
                </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment2"
                      value="p2"
                    />
                    <label className="form-check-label" htmlFor="payment2">
                      Check Payment
                </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment2"
                      value="p2"
                    />
                    <label className="form-check-label" htmlFor="payment2">
                      Cah on delivery
                </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment2"
                      value="p2"
                    />
                    <label
                      className="form-check-label d-flex align-items-center"
                      htmlFor="payment2"
                    >
                      PayPal
                  <img
                        className="mx-2"
                        src="@/assets/img/shop-img/paypal-logo.png"
                        alt=""
                      />
                      <span className="text-grey-color">What is PayPal?</span>
                    </label>
                  </div>
                  <hr />
                  <p>
                    Your personal data will be used to process your order, support
                    your experience throughout this website, and for other purposes
                described in our{" "}
                    <span className="text-theme-color">privacy policy.</span>
                  </p>
                  <hr />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="accept-terms"
                    />
                    <label className="form-check-label" htmlFor="accept-terms">
                      I have read and agree to the website{" "}
                      <span className="text-theme-color">
                        terms and conditions *
                  </span>
                    </label>
                  </div>
                  <button type="submit" className="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Brands></Brands>
      </div>
    </div>
  );
}