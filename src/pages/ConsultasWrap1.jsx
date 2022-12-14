import React from 'react'
import { PopupProvider } from '../context/PopupProvider';
import Consultas1 from './Consultas1'

import { useDispatch } from 'react-redux'
import { loginSetter, crfaLogin } from '../actions'

import '../style/Dashboard.scss'

const ConsultasWrap1 = () => {
  const dispatch = useDispatch()
  let lstorage = JSON.parse(localStorage.getItem('auth'))
  dispatch(loginSetter(lstorage.accessToken))
  dispatch(crfaLogin(lstorage.currCrfa))

  return (
    <PopupProvider>
      <Consultas1 />
    </PopupProvider>
  )
}

export default ConsultasWrap1