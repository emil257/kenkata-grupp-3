import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions/user'
import { Link } from "react-router-dom";
import "./index.css";
import nike_hoodie from '../../../assets/img/nike_hoodie.jpg' 

export default function AccoutProfile(props) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <div className="container" id="user-style">
        <div className="d-flex flex-column justify-content-center">
          <div className="user text-center text-dark font-weight-bold">
            <h1 className="user-name">{props.user.userName}</h1>
            <p>{props.user.email}</p>
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
            <div className="collapse-content mt-3 mb-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Recipe ID</th>
                    <th scope="col">Total amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td className="date">2020-06-03</td>
                    <td><p className="product-name">Nike Hoodie 347</p><img className="product-img" src={nike_hoodie} alt="/#"/></td>
                    <td className="receipe-id">5f632fe51f09924310a290c8</td>
                    <td className="total-amount text-theme">＄300.00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td className="date">2020-03-03</td>
                    <td><p className="product-name">Nike Hoodie 347</p><img className="product-img" src={nike_hoodie} alt="/#" /></td>
                    <td className="receipe-id">5f632fe51f09924310a290c8</td>
                    <td className="total-amount text-theme">＄300.00</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td className="date">2020-03-03</td>
                    <td><p className="product-name">Nike Hoodie 347</p><img className="product-img" src={nike_hoodie} alt="/#" /></td>
                    <td className="receipe-id">5f632fe51f09924310a290c8</td>
                    <td className="total-amount text-theme">＄300.00</td>
                  </tr>
                </tbody>
              </table>
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
            <div className="collapse-content mt-3 mb-3">
              <p>{props.user.userName}</p>
              <p>{props.user.email}</p>
              <Link className="btn btn-outline-info mt-1" to="/#">Change Password</Link>
            </div>
          </div>
          <button onClick={handleLogout} className="mx-auto btn btn-logout btn-theme text-center mt-5">Logout</button>
        </div>
      </div>
    </div>
  )
}
