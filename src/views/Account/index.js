import React from 'react'

import AppLogin from '../../components/app-account/app-login'
import AppRegister from '../../components/app-account/app-register'
import AppBrands from '../../components/app-brands'

export default function Account() {
  return (
    <div>
    
    <div className="container">
      <div className="row pt-5">
        <AppLogin/>
        <AppRegister/>
      </div>
    </div>
    <AppBrands/>
  </div>
  )
}
