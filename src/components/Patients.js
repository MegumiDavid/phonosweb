import React, { useContext } from 'react'

import PopupContext from '../context/PopupProvider';

import PatientTr from '../components/PatientTr'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass
 } from '@fortawesome/free-solid-svg-icons'

 import '../style/Dashboard.scss'
import profilePic from '../images/profile-ex.png'

const Patients = () => {
  const { setIsOpen, setCurrPopup } = useContext(PopupContext)

  const handleAddBtn = () => {
    setCurrPopup('addPatient')
    setIsOpen(true)
  }

  return (
    <div className="patients">
        <h1 className="h1">Pacientes</h1>
        <div className="form">
            <div className="inputWrapper">
                <input type="text" className="input" id="iconified" placeholder="procurar paciente"/>
                <button className="btnSubmit">
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
                <th className="first td">Nome</th>
                <th className='td'>Token</th>
                <th className='td'>Nascimento</th>
                <th className='td'>Condição</th>
                <th className="actionTitle td">Action</th>
                </tr>
            </thead>
            <tbody>
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
                <PatientTr 
                    profilePic={profilePic}
                    name={'David Martinez'}
                    token={12345}
                    bday={'10/10/2020'}
                    condition={'Falta de Atenção'}
                />
            
            </tbody>
        </table>
    </div>
  )
}

export default Patients