import React from 'react'
import OrderItem from '../order-item'
import '../index.css'

export default function Index({ order, number }) {
    return (
        <div>
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
                    <div className="order-item-top-1 font-weight-bold"><p className="order">{number + 1}</p></div>
                    <div className="order-item-top-2"><p className="date">{order.created.slice(0, 10)}</p></div>
                    <div className="order-item-top-3"><p className="processing">{order.status}</p></div>
                    <div className="order-item-top-4"><p className="receipe-id">{order._id}</p></div>
                    <div className="order-item-top-5"><p className="total-amount text-theme">＄{order.orderTotal}.00</p></div>

                    <div className="custom-hr-3"></div>

                    {/* Middle Title-Items */}
                    <div className="item-middle-title-1 font-weight-bold">Product id</div>
                    <div className="item-middle-title-2 font-weight-bold">Product name</div>
                    <div className="item-middle-title-3 font-weight-bold">Product Price</div>

                    <div className="custom-hr-4"></div>

                    {/* Bottom Order-Items */}
                    {
                        order.order.map((o, index) => {
                            return (<OrderItem key={index} item={o} />)
                        })
                    }

                    {/* <div className="order-item-1"><p className="order-id">5f63624bebae650017b67d70</p></div>
                                <div className="order-item-2"><p className="product-name">Nike</p></div>
                                <div className="order-item-3 font-weight-bold"><p className="product-price text-theme">$300.00</p></div> */}

                    {/* Shows only on small screens */}
                    <div className="d-none custom-hr-5"></div>
                    <div className="d-none custom-hr-6"></div>
                    <div className="d-none custom-hr-7"></div>
                    <div className="d-none custom-hr-8"></div>
                    <div className="d-none custom-hr-9"></div>
                    <div className="d-none custom-hr-10"></div>
                    <div className="d-none custom-hr-11"></div>
                    <div className="d-none custom-hr-12"></div>
                    <div className="d-none custom-hr-13"></div>
                    <div className="d-none custom-hr-14"></div>
                    <div className="d-none custom-hr-15"></div>
                    <div className="d-none custom-hr-16"></div>

                </div>
            </div>
        </div>
    )
}
