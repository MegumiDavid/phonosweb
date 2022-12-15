import React, { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PopupContext from '../context/PopupProvider';
import PatientTr from '../components/PatientTr'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../style/Dashboard.scss'
import profilePic from '../images/profile-ex.png'

const Patients = () => {

  const accessToken = useSelector(state => state.logerReducer).accessToken
  const currCrfa = useSelector(state => state.crfaReducer).currCrfa
  const { setIsOpen, setCurrPopup, isChange, setIsChange } = useContext(PopupContext)
  const [pacientes, setPacientes] = useState([])
  const [fnameQuery, setFnameQuery] = useState('')
  const [queryChange, setQueryChange] = useState(false)

  const handleAddBtn = () => {
    setCurrPopup('addPatient')
    setIsOpen(true)
  }

  const getPacientes  = async () =>  {
    const requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
      },
    }
    const response = await fetch(`http://localhost:3000/pacientes/filter/${currCrfa}`, requestOptions)
    const data = await response.json()
    data.reverse()
    setPacientes(data)
  } 

  const findByName = () => {
    let allPatients = []
    if (fnameQuery === '') {
      getPacientes()  
    } else {
      pacientes.forEach(p => {
        let capilalizedQuery = `${fnameQuery.charAt(0).toUpperCase()}${fnameQuery.slice(1)}` 
        if (p.fname === capilalizedQuery) {
          allPatients.push(p)
        }
      })
      setPacientes(allPatients)
      setQueryChange(true)
    }
  }

  useEffect(() => {
    getPacientes()
  },[isChange])

  return (
    <div className="patients">
        <h1 className="h1">Pacientes</h1>
        <div className="form">
            <div className="inputWrapper">
                <input type="text" className="input" id="iconified" placeholder="procurar paciente" onChange={e => setFnameQuery(e.target.value)}/>
                <button className="btnSubmit" onClick={findByName}>
                    <i>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                </button>
            </div>
                <button className="btnAdd" onClick={ handleAddBtn }>
                    + Pacientes
                </button>
        </div>

        <table className="table">
            <thead className="thead">
                <tr>
                <th className="first td thname">Nome</th>
                <th className='td'>Token</th>
                <th className='td'>Nascimento</th>
                <th className='td'>Condição</th>
                <th className="actionTitle td">Action</th>
                </tr>
            </thead>
            <tbody>

                {pacientes.map(p => (
                    <PatientTr   
                      id={p.id}
                      key={p.token}
                      profilePic={profilePic}
                      fname={p.fname}
                      lname={p.lname}
                      token={p.token}
                      bday={p.bday}
                      img={require(`../images/${p.img}`)}
                      condition={p.condicao}                    
                    />
                ))}
 
            </tbody>
        </table>
    </div>
  )
}

export default Patients