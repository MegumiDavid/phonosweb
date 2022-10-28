import React, { useState, useContext } from 'react'
import profilePic from '../images/profile-ex.png'
import PopupContext from '../context/PopupProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPenToSquare,
 } from '@fortawesome/free-solid-svg-icons'


const PatientTr = ({ profilePic, name, token, bday, condition }) => {
  

  const { setIsOpen, setCurrPopup } = useContext(PopupContext)
  const handleEditBtn = () => {
    setCurrPopup('editPatient')
    setIsOpen(true)
  }
  
  return (
    <tr>
        <th className='firstCol'>
            <img src={profilePic} alt="profile" />
            {name}
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