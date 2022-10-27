import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Patients from '../components/Patients'
import Topbar from '../components/Topbar'
import MyProfile from '../components/MyProfile'
import Popup from '../components/Popup'

import { PopupProvider } from '../context/PopupProvider';
import PopupContext from '../context/PopupProvider';

import '../style/Dashboard.scss'


const Dashboard = () => {
  const { isOpen } = useContext(PopupContext)
  return (
    <PopupProvider>
      <Popup />
      <div className={`darkbg ${isOpen && 'hidden'}`}>
        <div className={`gridWrapper ${ isOpen && "overlay"}`}>
            <Sidebar />
            <main className="main">
                <Topbar text={'Bem vindo(a), '} hlightedText={'Megumi David'}/>
                <section className="infos">
                    <Patients />
                    <MyProfile />
                </section>
            </main>
        </div>
      </div>
    </PopupProvider>
  )
}

export default Dashboard