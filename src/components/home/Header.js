import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from '../../images/header-phonos.png'

function Header() {
  return (
    <header className="header appear">
        <div className="container">
            <div className="grid">
            <div className="header__text">
                <h1>Fono de maneira profissional e fácil</h1>
                <p>
                Para o profissional que procura facilidade de acesso, melhor gerenciamento e maior facilidade na comunicação com pacientes e ferramentas de apoio, o Phonos é a plataforma certa.
                </p>
                <Link to="/signup" className="btn">
                  Cadastre-se agora
                </Link>
            </div>
            <img
                src={headerImg}
                alt="happy-fono"
                className="header__img"
            />
            </div>
        </div>
    </header>
  )
}

export default Header