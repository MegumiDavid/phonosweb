import React, { useState, useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PopupContext from '../context/PopupProvider'

import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Popup from '../components/Popup'
import ConsultaCard from '../components/ConsultaCard'
  
import '../style/Dashboard.scss'
import profileImg from '../images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const Consultas = () => {

  const currCrfa = useSelector(state => state.logerReducer).currCrfa
  const { isOpen, setIsOpen, setCurrPopup } = useContext(PopupContext)
  const [agendaAtual, setAgendaAtual] = useState(false)
  const [isChange, setIsChange] = useState(false)
  const [allConsultas, setAllConsultas] = useState([])

  const handleAddConsulta = () => {
    return 
  }

  useEffect(() => {
    axios
		  .get(`http://localhost:3000/pacientes`)
		  .then(data => {
        setAllConsultas(data)
    })
    .catch(err => console.log(err))

    console.log(allConsultas)
  }, [])


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
                                 
                              </div>
                              <img src={ profileImg } alt="profile" className="profile" />
                              <p className="pacienteName"></p>
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