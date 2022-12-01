import React from 'react'

import { PopupProvider } from '../context/PopupProvider';
import Consultas from './Consultas'

import '../style/Dashboard.scss'

const ConsultasWrap = () => {
  return (
    <PopupProvider>
      <Consultas />
    </PopupProvider>
  )
}

export default ConsultasWrap