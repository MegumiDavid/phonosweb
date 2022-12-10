import React from 'react'

const CurrConsulta = ({ horario }) => {
  return (
    <div className='comAgenda'>
        <h3>Consulta Online</h3>
        <div className="horario">
            <p>{horario}</p>
        </div>
        {/* <img src={ profileImg } alt="profile" className="profile" /> */}
        <p className="pacienteName"></p>
        <button>Ver no Mapa</button>
    </div>
  )
}

export default CurrConsulta