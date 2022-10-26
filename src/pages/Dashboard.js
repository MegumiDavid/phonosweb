import React from 'react'
import Sidebar from '../components/Sidebar'
import Patients from '../components/Patients'
import Topbar from '../components/Topbar'
import MyProfile from '../components/MyProfile'

import '../style/Dashboard.scss'


function Dashboard() {
  return (
    <div className="gridWrapper">
        <Sidebar />
        <main className="main">

            <Topbar text={'Bem vindo(a), '} hlightedText={'Megumi David'}/>

            <section className="infos">
                <Patients />
                <MyProfile />

            </section>
        </main>
    </div>
  )
}

export default Dashboard