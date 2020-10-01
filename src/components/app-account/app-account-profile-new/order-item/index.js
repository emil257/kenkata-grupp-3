import React from 'react'
import '../index.css'

export default function Index({ item }) {
    return (
        <div>
            <div className="order-item-1"><p className="order-id">{item._id}</p></div>
            <div className="order-item-2"><p className="product-name">item.product.name}</p></div>
            <div className="order-item-3 font-weight-bold"><p className="product-price text-theme">＄{item.product.price - item.product.discount}.00</p></div>
        </div>
    )
}
