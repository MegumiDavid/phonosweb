import React from 'react'

import { PopupProvider } from '../context/PopupProvider';
import Dashboard from './Dashboard'

import '../style/Dashboard.scss'

const DashboardWrap = () => {
  return (
    <PopupProvider>
      <Dashboard />
    </PopupProvider>
  )
}

export default DashboardWrap