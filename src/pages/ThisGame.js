import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/Dashboard.scss'
import Sidebar from '../components/Sidebar'

const ThisGame = () => {
  let params = useParams()
  const gameList = ['Jogo da Forca', 'Cruzadinha', 'Caça Palavra', 'Jogo da Memoria']
  return (
    <div className="gridWrapper">
        <Sidebar />
        <main className="thisgame">
            <div className="topbar">
                <h1 className="h1">{gameList[params.id - 1]}</h1>
                <div className="dsline"></div>
            </div>

            <div className="gamebox">
            </div>
        </main>
    </div>
  )
}

export default ThisGame