import React from 'react'
import nike_hoodie from '../../../../assets/img/nike_hoodie.jpg' 
import OrderItem from './order-item'

export default function Orderitem({order, number}) {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{number + 1}</th>
        <td className="date">{order.created.slice(0, 10)}</td>
        <td>{order.status}</td>
        <td className="receipe-id">{order._id}</td>
        <td className="total-amount text-theme">＄{order.orderTotal}.00</td>
      </tr>
      <tr>
        <td colSpan="5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product id</th>
              <th scope="col">Product name</th>
              <th scope="col">Product price</th>
            </tr>
          </thead>
          <tbody>
            {
              order.order.map((o, index)=> {
                return (<OrderItem key={index} item={o}/>)
              })
            }
          </tbody>
        </table>
        </td>
      </tr>
    </React.Fragment>
  )
}
