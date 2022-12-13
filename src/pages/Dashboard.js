import React, { useState, useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PopupContext from '../context/PopupProvider';

import Sidebar from '../components/Sidebar'
import Patients from '../components/Patients'
import Topbar from '../components/Topbar'
import MyProfile from '../components/MyProfile'
import Popup from '../components/Popup'

import '../style/Dashboard.scss'

const Dashboard = () => {

  const accessToken = useSelector(state => state.logerReducer).accessToken
  const currCrfa = useSelector(state => state.crfaReducer).currCrfa
  const { isOpen } = useContext(PopupContext)
  const [fonoData, setFonoData] = useState([])

  const getMyProfile = async () =>  {
    const requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
      },
    }
    const response = await fetch(`http://localhost:3000/fonos/${currCrfa}`, requestOptions )
    const data = await response.json()
    setFonoData(data)
  } 

  useEffect(() => {
    getMyProfile()
  },[])
  
  return (
    <>
      <Popup />
      <div className={`darkbg ${isOpen ? 'hidden' : ''}`}>
        <div className={`gridWrapper ${ isOpen ?'overlay' : ''}`}>
            <Sidebar />
            <main className="main">
                <Topbar text={'Bem vindo(a), '} hlightedText={`${fonoData.fname} ${fonoData.lname}`}/>
                <section className="infos">
                    <Patients />
                    <MyProfile fonoData={fonoData}/>
                </section>
            </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard