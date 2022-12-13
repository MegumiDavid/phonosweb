import React from 'react'
import { Link } from 'react-router-dom'

const Game = ({ img, title, desc, link }) => {
  return (
    <div className="game">
        <div className="imgBox">
            <img src={img} alt="joguinhos" />
        </div>

        <div className="text">
            <h2 className="h2">{title}</h2>
            <p className="p">{desc}</p>
            <a href={link} target="_blank" className='btnPlay'>
              Jogar
            </a>
        </div>
    </div>
  )
}

export default Game