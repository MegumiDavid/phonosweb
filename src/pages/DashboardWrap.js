import React from 'react'

import { PopupProvider } from '../context/PopupProvider';
import Dashboard from './Dashboard'

import { useDispatch } from 'react-redux'
import { loginSetter, crfaLogin } from '../actions'


const DashboardWrap = () => {
  const dispatch = useDispatch()
  let lstorage = JSON.parse(localStorage.getItem('auth'))
  dispatch(loginSetter(lstorage.accessToken))
  dispatch(crfaLogin(lstorage.currCrfa))

  return (
    <PopupProvider>
      <Dashboard />
    </PopupProvider>
  )
}

export default DashboardWrap