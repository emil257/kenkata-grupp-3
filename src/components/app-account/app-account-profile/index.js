import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions/user'

export default function AccoutProfile(props) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="row pt-5">
      <div className="col-2">
          <h4>Username:</h4>
          <h4>Email:</h4>
        </div>
        <div className="col-2">
          <h4>{props.user.userName}</h4>
          <h4>{props.user.email}</h4>
        </div>
        <div>
          <button onClick={handleLogout} className="btn btn-info">Logout</button>
        </div>
    </div>
  )
}
