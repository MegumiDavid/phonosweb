import React from 'react'
import { PopupProvider } from '../context/PopupProvider';
import Consultas1 from './Consultas1'

import '../style/Dashboard.scss'

const ConsultasWrap1 = () => {
  return (
    <PopupProvider>
      <Consultas1 />
    </PopupProvider>
  )
}

export default ConsultasWrap1