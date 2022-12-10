import React, { useState, useEffect } from 'react'
import CurrConsulta from '../components/CurrConsulta'
// import { useSelector } from 'react-redux'
import axios from 'axios'

const Consultas2 = () => {
  // const currCrfa = useSelector(state => state.logerReducer).currCrfa
  const currCrfa = '12345'
  const [consultas, setConsultas] = useState([])

  useEffect(() => {
    axios
		.get(`http://localhost:3000/agendamentos/${currCrfa}`)
		.then(data => {
			setConsultas(data.data)
		})
		.catch(err => console.log(err))
    console.log(consultas);
  },[])

  const checkState = () => {
    console.log(consultas);
  }

  return (
    <>
      <h1>Hello World</h1>
      <h1>{consultas[0] ? consultas[0].hora : 'David'}</h1>
      <button onClick={checkState}>Click me</button>
      <CurrConsulta horario={consultas[0] ? consultas[0].hora : 'David'} />
    </>
  )
}

export default Consultas2