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
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups.
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