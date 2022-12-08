import React, { useState, useContext } from 'react'
import PopupContext from '../context/PopupProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPenToSquare,
 } from '@fortawesome/free-solid-svg-icons'


const PatientTr = ({ profilePic, fname, lname, token, bday, img, condition }) => {
  const { setIsOpen, setCurrPopup, setCurrPacienteToken } = useContext(PopupContext)
  const handleEditBtn = () => {
    setCurrPopup('editPatient')
    setCurrPacienteToken(token)
    setIsOpen(true)
  }
  
  return (
    <tr>
        <th className='firstCol'>
            <img src={ img } alt="profile" />
            <p>{`${fname} ${lname}`}</p>
        </th>
        <th>{token}</th>
        <th>{bday}</th>
        <th>{condition}</th>
        <th className="action">
            <button onClick={ handleEditBtn }>
            <i>
                <FontAwesomeIcon icon={faPenToSquare} />
            </i>
            </button>
        </th>
    </tr>
  )
}

export default PatientTr