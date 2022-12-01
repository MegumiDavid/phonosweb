import React, { useContext } from 'react'
import PopupContext from '../context/PopupProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  faPenToSquare,
 } from '@fortawesome/free-solid-svg-icons'


const ConsultaCard = () => {

  const { setIsOpen, setCurrPopup } = useContext(PopupContext)  
  function aaaa () {
    setCurrPopup('editConsulta')
    setIsOpen(true)
  }
  

  return (
    <div className="consultaCard">
        <div className="topWrap">
            <div className="horario">
                <p>4 de Agosto de 2022 (Sex)</p>
                <p>14:20 ~ 15:20</p>
            </div>
            <button className="editBtn" onClick={ aaaa }>
              <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
              </i>
            </button>
        </div>
        <div className="bottomWrap">
            <p className="tipoConsulta">Presencial</p>
            <p className="statusConsulta agendado">Agendado</p>
            {/* <p className="statusConsulta finalizado">Finalizado</p> */}
            {/* <p className="statusConsulta cancelado">Cancelado</p> */}
        </div>
    </div>
  )
}

export default ConsultaCard