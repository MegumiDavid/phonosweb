import React, { useContext } from 'react'
import PopupContext from '../context/PopupProvider'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  faPenToSquare,
 } from '@fortawesome/free-solid-svg-icons'


const ConsultaCard = ({ data, hora, tipo, status, paciente, endereco }) => {
  const { setIsOpen, setCurrPopup } = useContext(PopupContext)  
  function aaaa () {
    setCurrPopup('editConsulta')
    setIsOpen(true)
  }

  return (
    <div className="consultaCard">
        <div className="topWrap">
            <div className="horario">
                <p>{data}</p>
                <p>{hora}</p>
            </div>
            {/* <button className="editBtn" onClick={ aaaa }>
              <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
              </i>
            </button> */}
        </div>
        <div className="bottomWrap">
            <p className="tipoConsulta" style={{textTransform: 'capitalize'}}>{tipo}</p>
            <p className="statusConsulta agendado" style={{textTransform: 'capitalize'}}>
              Agendado
            </p>
            {/* <p className="statusConsulta finalizado">Finalizado</p> */}
            {/* <p className="statusConsulta cancelado">Cancelado</p> */}
        </div>
    </div>
  )
}

export default ConsultaCard