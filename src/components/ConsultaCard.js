import React, { useContext } from 'react'
import PopupContext from '../context/PopupProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  faPenToSquare,
 } from '@fortawesome/free-solid-svg-icons'


const ConsultaCard = ({ data, hora, tipo, status, paciente, endereco }) => {
  const { setIsOpen, setCurrPopup } = useContext(PopupContext)  
  function aaaa () {
    setCurrPopup('editConsulta')
    setIsOpen(true)
  }

  function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  const today = formatDate()
  const consSts = today > new Date(data)
  console.log(today)
  console.log(consSts)

  return (
    <div className="consultaCard">
        <div className="topWrap">
            <div className="horario">
                <p>{data}</p>
                <p>{hora}</p>
            </div>
            <button className="editBtn" onClick={ aaaa }>
              <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
              </i>
            </button>
        </div>
        <div className="bottomWrap">
            <p className="tipoConsulta" style={{textTransform: 'capitalize'}}>{tipo}</p>
            <p className="statusConsulta agendado" style={{textTransform: 'capitalize'}}>
              { consSts ? "Agendado" : "Terminado" }
            </p>
            {/* <p className="statusConsulta finalizado">Finalizado</p> */}
            {/* <p className="statusConsulta cancelado">Cancelado</p> */}
        </div>
    </div>
  )
}

export default ConsultaCard