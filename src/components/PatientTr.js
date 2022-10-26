import React from 'react'
import profilePic from '../images/profile-ex.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPenToSquare,
 } from '@fortawesome/free-solid-svg-icons'


const PatientTr = ({ profilePic, name, token, bday, condition }) => {
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
            <button>
            <i>
                <FontAwesomeIcon icon={faPenToSquare} />
            </i>
            </button>
        </th>
    </tr>
  )
}

export default PatientTr