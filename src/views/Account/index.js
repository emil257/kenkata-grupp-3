import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout } from '../../store/actions/user'

import AppLogin from '../../components/app-account/app-login'
import AppRegister from '../../components/app-account/app-register'
import AppAccountProfile from '../../components/app-account/app-account-profile'
import AppBrands from '../../components/app-brands'


const checkLoggedIn = (loggedIn, user, logout) => {
  if(!loggedIn && user !== null){
    return (
      <div className="row pt-5">
        <AppLogin/>
        <AppRegister/>
      </div>
    )
  } else {
    return (
        <AppAccountProfile user={user}/>
    )
  }

}

export default function Account() {

  const user = useSelector(state => state.user.user)
  const loggedIn = useSelector(state => state.user.loggedIn)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])


  return (
    <div>
    
    <div className="container">
        {checkLoggedIn(loggedIn, user, () => dispatch(logout()))}
    </div>
    <AppBrands/>
  </div>
  )
}
