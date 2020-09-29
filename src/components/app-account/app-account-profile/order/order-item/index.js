import React from 'react'

export default function Orderitem({item}) {
  return (
    <tr>
        <th scope="row">{item._id}</th>
        <td className="date">{item.product.name}</td>
        <td className="total-amount text-theme">＄{item.product.price - item.product.discount}.00</td>
      </tr>
  )
}
