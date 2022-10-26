import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/Dashboard.scss'
import Sidebar from '../components/Sidebar'

const ThisGame = () => {
  let params = useParams()
  const gameList = ['Jogo da Forca', 'Cruzadinha', 'Caça Palavra', 'Jogo da Memoria']
  return (
    <div class="gridWrapper">
        <Sidebar />
        <main class="thisgame">
            <div class="topbar">
                <h1 class="h1">{gameList[params.id - 1]}</h1>
                <div className="dsline"></div>
            </div>

            <div class="gamebox">
            </div>
        </main>
    </div>
  )
}

export default ThisGame