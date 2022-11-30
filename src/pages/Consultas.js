import React, { useState, useContext } from 'react'

import '../style/Dashboard.scss'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Popup from '../components/Popup'

import PopupContext from '../context/PopupProvider';

function Consultas() {
  const { isOpen, currPopup } = useContext(PopupContext)
  console.log(isOpen);
  console.log(currPopup);

  return (
    <>
      <Popup />
      <div className={`darkbg ${isOpen ? 'hidden' : ''}`}>
        <div className={`gridWrapper ${ isOpen ?'overlay' : ''}`}>
            <Sidebar />
            <main className="main">
                <Topbar text={'Consultas '} hlightedText={'Agenda'}/>
                <section className="consultas">
                    <div className="atual">
                      <h1 className="h1">Agendamento atual</h1>
                      <div className="box"></div>
                    </div>
                    <div className="futuros">
                      <h1 className="h1">Agendamento futuros</h1>
                      <div className="box"></div>
                    </div>
                    <div className="historico">
                      <h1 className="h1">Historico</h1>
                      <div className="box">
                        <div className="consulta-card"></div>
                      </div>
                    </div>
                </section>
            </main>
        </div>
      </div>
    </>
  )
}

export default Consultas