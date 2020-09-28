import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { logout } from '../../../store/actions/user'
import "./index.css";

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
          {/* My Orders */}
          <div className="collapse-box mx-auto mt-5 mb-1">
            <div className="bg-trans d-flex align-items-center justify-content-between" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
              <div className="">My Orders</div>
              <div className=""><i class="fas fa-chevron-down"></i></div>
            </div>
          </div>
          <div class="collapse" id="collapseExample1">
            <div className="collapse-content text-center mt-3 mb-3">
              Anim pariatur cliche reprehenderit
            </div>
          </div>
          {/* Account Details */}
          <div className="collapse-box mx-auto mt-1">
            <div className="bg-trans d-flex align-items-center justify-content-between" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              <div className="">Account details</div>
              <div className=""><i class="fas fa-chevron-down"></i></div>
            </div>
          </div>
          <div class="collapse" id="collapseExample2">
            <div className="collapse-content text-center mt-3 mb-3">
              <p>{props.user.userName}</p>
              <p>{props.user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="mx-auto btn btn-logout btn-theme text-center mt-5">Logout</button>
        </div>
      </div>
    </div>
  )
}
