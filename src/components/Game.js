import React from 'react'
import { Link } from 'react-router-dom'

const Game = ({ img, title, desc, id }) => {
  return (
    <div className="game">
        <div className="imgBox">
            <img src={img} alt="joguinhos" />
        </div>

        <div className="text">
            <h2 className="h2">{title}</h2>
            <p className="p">{desc}</p>
            <Link to={`/joguinhos/${id}`} className="btnPlay">
                Jogar
            </Link>
        </div>
    </div>
  )
}

export default Game