import React, { useState, useEffect, useContext } from 'react'
import PopupContext from '../context/PopupProvider'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Popup from '../components/Popup'
import ConsultaCard from '../components/ConsultaCard'

import '../style/Dashboard.scss'
import profileImg from '../images/profile.png'
import myProfilePicture from '../images/anonimous-profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const Consultas1 = () => {
  const accessToken = useSelector(state => state.logerReducer).accessToken
  const currCrfa = useSelector(state => state.crfaReducer).currCrfa
  const { isOpen, setIsOpen, setCurrPopup } = useContext(PopupContext)
  const [consultas, setConsultas] = useState([])
  const [isChange, setIsChange] = useState(false)

  const [dataCons, setData] = useState('')
  const [hora, setHora] = useState('')
  const [paciente, setPaciente] = useState('')
  const [tipo, setTipo] = useState('')
  const [endereco, setEndereco] = useState('zoom.com')

  const handleAddConsulta = async (e) => {
    e.preventDefault()
    const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ 
                data: dataCons,
                hora: hora,
                fono: currCrfa,
                paciente: paciente,
                tipo: tipo,
                endereco: endereco
            })
    };
    await fetch('http://localhost:3000/agendamentos/', requestOptions);
    setIsChange(!isChange)
    alert('Consulta criado com sucesso')
    setData('');setHora('');setPaciente('');setTipo('');setEndereco('zoom.com')
  }

  const getConsultas = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
      },
    };
    const response = await fetch(`http://localhost:3000/agendamentos/`, requestOptions )
    const data = await response.json()
    setConsultas(data.reverse())
    console.log(data);    
  }

  useEffect(() => {
    getConsultas()
  },[isChange])

  return (
    <>
      <Popup />
        <div className={`gridWrapper ${ isOpen ? 'overlay' : ''}`}>
          <Sidebar />
          <main className="main">
              <Topbar text={'Consultas '} hlightedText={'Agenda'}/>
              <section className="consultas">
                  <div className="atual">
                    <h1 className="h1">Agendamento Proximo</h1>
                    <div className="consultaBox">
                      {
                        consultas[0] ?
                        (
                          <div className='comAgenda'>
                          <h3>Consulta {consultas[0].tipo}</h3>
                          <div className="horario">
                            <p>{ consultas[0]? `${consultas[0].data} ${consultas[0].hora}`: ''}</p>
                          </div>
                          <img src={ myProfilePicture } alt="profile" className="profile" />
                          <p className="pacienteName">
                            {/* {paciente ? `${paciente.fname} ${paciente.lname}` : ''} */}
                          </p>
                          {
                            (consultas[0].tipo === 'presencial') ?
                            (
                              <>
                                <p className="address">{ consultas[0] && `${consultas[0].endereco}`}</p>
                              </>
                            )
                            :
                           (
                            <p>Online</p>
                           ) 
                          }
                        </div>
                        ) 
                        :
                        (
                          <div className='semAgenda'>
                            <i>
                              <FontAwesomeIcon icon={faTriangleExclamation} />
                            </i>
                            <p>Nenhum agendamento para este momento. </p>
                          </div>
                        )
                      }
                      {
                        (consultas[0] && consultas[0].tipo === 'online') 
                        &&
                        (
                          <button className="newAgenda" onClick={ handleAddConsulta }>
                            Ir Para Consulta Online
                          </button>
                        ) 
                      }
                    </div>
                  </div> 
                  <div className="futuros">
                    <h1 className="h1">Todos Agendamentos</h1>
                    <div className="futuroBox">
                      {consultas[0] && consultas.slice(1).map((c) => (
                        <ConsultaCard 
                          data={c.data}
                          hora={c.hora}
                          tipo={c.tipo}
                          status={c.status}
                          paciente={c.paciente}
                          endereco={c.endereco}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="historico">
                    <h1 className="h1">Marcar Consulta</h1>
                    <div className="marcarConsultaBox">
                        <form onSubmit={handleAddConsulta}>
                          <div className="inputwrap">
                            <label htmlFor="dataConsulta">Data</label>
                            <input type="date" id='dataConsulta' onChange={(e) => setData(e.target.value)}/>
                          </div>
                          <div className="inputwrap">
                            <label htmlFor="hora">Hora</label>
                            <input type="text" id='hora' onChange={(e) => setHora(e.target.value)}/>
                          </div>
                          <div className="inputwrap">
                            <label htmlFor="paciente">Paciente</label>
                            <input type="text" id='paciente' onChange={(e) => setPaciente(e.target.value)}/>
                          </div>
                          <div className="inputwrap">
                            <label htmlFor="tipo">Tipo (presencial / online)</label>
                            <input type="text" id='tipo' onChange={(e) => setTipo(e.target.value)}/>
                          </div>
                          {tipo === 'presencial' &&
                            (
                              <div className="inputwrap">
                                <label htmlFor="endereco">Endereco</label>
                                <input type="text" id='endereco ' onChange={(e) => setEndereco(e.target.value)}/>
                              </div>
                            )
                          }
                          <div className="btnWrap">
                            <button type='submit'>
                              Criar Consulta
                            </button>
                          </div>
                        </form>
                    </div>
                  </div>
              </section>
          </main>
        </div>
    </>
  )
}

export default Consultas1