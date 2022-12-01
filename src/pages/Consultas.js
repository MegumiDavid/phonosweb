  import React, { useState, useContext } from 'react'

import '../style/Dashboard.scss'

import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Popup from '../components/Popup'
import ConsultaCard from '../components/ConsultaCard'

import PopupContext from '../context/PopupProvider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import profileImg from '../images/profile.png'

function Consultas() {
  const { isOpen, setIsOpen, setCurrPopup } = useContext(PopupContext)
  const [agendaAtual, setAgendaAtual] = useState(false)

  const handleAddConsulta = () => {
    setCurrPopup('addConsulta')
    setIsOpen(true)
  }

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
                      <div className="consultaBox">
                        {
                          agendaAtual ? 
                          (
                            <div className='semAgenda'>
                              <i>
                                <FontAwesomeIcon icon={faTriangleExclamation} />
                              </i>
                              <p>Nenhum agendamento para este momento. </p>
                            </div>
                          )
                          :
                          (
                            <div className='comAgenda'>
                              <h3>Consulta Online</h3>
                              <div className="horario">
                                <p>4 de Agosto de 2022 (Sex)</p>
                                <p>14:20 ~ 15:20</p>
                              </div>
                              <img src={profileImg} alt="profile" className="profile" />
                              <p className="pacienteName">David Paciente-kyun</p>
                              <p className="address">Rua David Center, 69 Consultorio 197</p>
                              <button>Ver no Mapa</button>
                            </div>
                          )
                        }
                        <button className="newAgenda" onClick={ handleAddConsulta }>
                          Novo Agendamento
                        </button>
                      </div>
                    </div> 
                    <div className="futuros">
                      <h1 className="h1">Agendamento futuros</h1>
                      <div className="futuroBox">
  
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />

                      </div>
                    </div>
                    <div className="historico">
                      <h1 className="h1">Historico</h1>
                      <div className="historicoBox">

                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        <ConsultaCard />
                        
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