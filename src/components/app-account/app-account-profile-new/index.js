import React from 'react'
import { Link } from "react-router-dom";
import "./index.css";

export default function Index() {
    return (
        <div>
            <div className="container" id="user-style">
                {/* User */}
                <div className="d-flex flex-column justify-content-center">
                    <div className="user text-center text-dark font-weight-bold">
                        <h1 className="user-name">username</h1>
                        <p>mikael_holmstrom@hotmail.com</p>
                    </div>
                    {/* Bonus */}
                    <div className="bonus-box text-center mt-3 mx-auto">
                        <h3>Bonus</h3>
                        <h1 className="text-theme">$0</h1>
                        <Link className="text-dark" to="/#">Read more</Link>
                    </div>
                    {/* My Orders */}
                    <div className="collapse-box mx-auto mt-5 mb-1">
                        <div className="bg-trans d-flex align-items-center justify-content-between" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div>My Orders</div>
                            <div><i className="fas fa-chevron-down"></i></div>
                        </div>
                    </div>
                    <div className="collapse" id="collapseExample1">
                        <div className="collapse-shadow">
                            <div className="grid-wrapper">
                                {/* Top Titles */}
                                <div className="custom-hr-1"></div>
                                
                                <div className="item-top-title-1 font-weight-bold">#</div>
                                <div className="item-top-title-2 font-weight-bold">Date</div>
                                <div className="item-top-title-3 font-weight-bold">Status</div>
                                <div className="item-top-title-4 font-weight-bold">Recipe ID</div>
                                <div className="item-top-title-5 font-weight-bold">Total amount</div>

                                <div className="custom-hr-2"></div>

                                {/* Top Items */}
                                <div className="order-item-top-1 font-weight-bold"><p className="order">1</p></div>
                                <div className="order-item-top-2"><p className="date">2020-09-29</p></div>
                                <div className="order-item-top-3"><p className="processing">processing</p></div>
                                <div className="order-item-top-4"><p className="receipe-id">5f63624bebae650017b67d70</p></div>
                                <div className="order-item-top-5"><p className="total-amount text-theme">$840.00</p></div>

                                <div className="custom-hr-3"></div>

                                {/* Middle Title-Items */}
                                <div className="item-middle-title-1 font-weight-bold">Product id</div>
                                <div className="item-middle-title-2 font-weight-bold">Product name</div>
                                <div className="item-middle-title-3 font-weight-bold">Product Price</div>

                                <div className="custom-hr-4"></div>

                                {/* Bottom Order-Items */}
                                <div className="order-item-1 font-weight-bold"><p className="order-id">5f63624bebae650017b67d70</p></div>
                                <div className="order-item-2"><p className="product-name">Nike</p></div>
                                <div className="order-item-3 font-weight-bold"><p className="product-price text-theme">$300.00</p></div>

                                {/* Shows only on small screens */}
                                <div className="d-none custom-hr-5"></div>

                            </div>
                        </div>
                    </div>
                    {/* Account Details */}
                    <div className="collapse-box mx-auto mt-1">
                        <div className="bg-trans d-flex align-items-center justify-content-between" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className="">Account details</div>
                            <div className=""><i className="fas fa-chevron-down"></i></div>
                        </div>
                    </div>
                    <div className="collapse" id="collapseExample2">
                        <div className="collapse-shadow mt-3 mb-3">
                            <p className="username">username</p>
                            <p className="email">email@hotmail.com</p>
                            <Link className="btn btn-outline-info mt-1" to="/#">Change Password</Link>
                        </div>
                    </div>
                    <button className="mx-auto btn btn-logout btn-theme text-center mt-5">Logout</button>
                </div>
            </div>
        </div>
    )
}
