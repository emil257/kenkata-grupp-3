// import React from 'react'
// import nike_hoodie from '../../../../assets/img/nike_hoodie.jpg' 
// import OrderItem from './order-item'

<<<<<<< HEAD
// export default function Orderitem({order, number}) {
//   return (
//       <div className="collapse-content mt-3 mb-3">
//       <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Date</th>
//               <th scope="col">Status</th>
//               <th scope="col">Recipe ID</th>
//               <th scope="col">Total amount</th>
//             </tr>
//           </thead>
//           <tbody>
//       <tr>
//         <th scope="row">{number + 1}</th>
//         <td className="date">{order.created.slice(0, 10)}</td>
//         <td>{order.status}</td>
//         <td className="receipe-id">{order._id}</td>
//         <td className="total-amount text-theme">＄{order.orderTotal}.00</td>
//       </tr>
//       <tr>
//         <td colSpan="5">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Product id</th>
//               <th scope="col">Product name</th>
//               <th scope="col">Product price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               order.order.map((o, index)=> {
//                 return (<OrderItem key={index} item={o}/>)
//               })
//             }
//           </tbody>
//         </table>
//         </td>
//       </tr>
//       </tbody>
//     </table>
//     </div>
//   )
// }
=======
export default function Orderitem({order, number}) {
  return (
    <div className="collapse-content mt-3 mb-3">
          <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Recipe ID</th>
                  <th scope="col">Total amount</th>
                </tr>
              </thead>
            <tbody>
          <tr>
            <th scope="row">{number + 1}</th>
            <td className="date">{order.created.slice(0, 10)}</td>
            <td>{order.status}</td>
            <td className="receipe-id">{order._id}</td>
            <td className="total-amount text-theme">＄{order.orderTotal}.00</td>
          </tr>
          </tbody>
          </table>
          <table className="table">
              <thead>
                <tr>
                  <th scope="col" colSpan="2">Product id</th>
                  <th scope="col" colSpan="2">Product name</th>
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
    </div>
  )
}
>>>>>>> be07ae66615f3b9757c7306f6bcc4355f0cb7b8d
