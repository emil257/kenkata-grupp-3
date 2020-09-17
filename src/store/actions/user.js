import actiontypes from '../actiontypes'
import axios from 'axios'

export const register = (user) => {
  return function (dispatch) {
    return axios.post('http://secret-sea-49739.herokuapp.com/api/users/register', user).then(res => {
      dispatch({
        type: actiontypes().user.registerUser,
        payload: res.data
      })
    })
  }
}
export const login = (user) => {
  return function (dispatch) {
    return axios.post('http://secret-sea-49739.herokuapp.com/api/users/login', user).then(res => {
      dispatch({
        type: actiontypes().user.loginUser,
        payload: res.data
      })
      dispatch(loadUser())
    })
  }
}
export const loadUser = () => {
  return function (dispatch) {
    return axios.get("http://secret-sea-49739.herokuapp.com/api/users/user", { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      dispatch({
        type: actiontypes().user.loadUser,
        payload: res.data
      })
    }).catch(err => {
      dispatch({
        type: actiontypes().user.loadUser,
        payload: {}
      })
      dispatch(logout())
    })
  }
}
export const logout = () => {
  return {
    type: actiontypes().user.logoutUser
  }
}
export const updateDetails = (shipping) => {
  return function (dispatch) {
    return axios.put('http://secret-sea-49739.herokuapp.com/api/users/shipping', { shipping: shipping }, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      dispatch({
        type: actiontypes().user.updateUserShippingDetails,
        payload: res.data
      })
      dispatch(loadUser())
    })
  }
}
