import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, login, resetStatusCode } from '../../../store/actions/user'
// import validator from 'validator'


import '../index.css'

export default function Register() {

  const dispatch = useDispatch()
  const registerErrorCode = useSelector(state => state.user.loginStatusCode)

  useEffect(()=> {
    if(registerErrorCode === 201)
      dispatch(login({
        email: email,
        password: password
      }))
  }, [registerErrorCode])
  

  const [u_name, set_u_name] = useState("")
  const [email, set_email] = useState("")
  const [password, set_password] = useState("")

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const user = {
      userName: u_name,
      email: email,
      password: password
    }
    await dispatch(register(user))
  }

  const handleRegisterError = () => {
    if(registerErrorCode !== null && registerErrorCode === 409)
      return (<small className="invalid-login">Email already exists!</small>)
    // dispatch(resetStatusCode())
  }

  
  return (
    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
      <Form className="custom-form" onSubmit={handleSubmit} >
        <h3 className="text-size-24">REGISTER</h3>
        <p className="text-dark-grey-color font-size-14 my-3">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
        <div className="form-group">
          <label htmlFor="username" className="text-size-14 font-montserrat">Username<span className="text-theme-color">*</span></label>
          <Input type="text" className="form-control custom-r-input" id="username" value={u_name} onChange={e => set_u_name(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-size-14 font-montserrat">Email adress<span className="text-theme-color">*</span></label>
          <Input type="email" className="form-control custom-r-input" id="email" value={email} onChange={e => set_email(e.target.value)}/>
        </div>
        {handleRegisterError()}
        <div className="form-group">
          <label htmlFor="password" className="text-size-14 font-montserrat">Password <span className="text-theme-color">*</span></label>
          <Input  type="password" className="form-control custom-r-input" id="password" value={password} onChange={e => set_password(e.target.value)}/>
        </div>
        <p className="mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-size-14 font-montserrat text-theme-color weight-bold">privacy policy.</span></p>
        <button className="btn custom-theme-btn text-size-18 btn-p-t-c mt-4">
          REGISTER
        </button>
      </Form>
    </div>
  )
}
