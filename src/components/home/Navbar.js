import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="nav">
        <div className="container">
            <div className="row">
                <div className="nav__wrapper">
                <Link to="/" className="logo"
                    ><img
                    src={logo}
                    alt="logo"
                    className="logo nav__logo"
                    />Phonos <span>.</span>
                </Link>
                </div>
                <div className="nav__wrapper">
                <ul className="nav__list hideForMobile">
                    <li className="nav__item">
                        <a href="#services" className="nav__link">Servicos</a>
                    </li>
                    <li className="nav__item">
                        <a href="#aboutus" className="nav__link">Sobre nós</a>
                    </li>
                    <li className="nav__item">
                        <a href="#faq" className="nav__link">Faq</a>
                    </li>
                    <li className="nav__item">
                        <Link to="/signup" className="nav__link">Cadastre-se</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/login" className="nav__btn">Log in</Link>
                    </li>
                </ul>
                <a  
                    onClick={() => setIsOpen(!isOpen)}
                    className={`nav__toggle hideForDesktop ${isOpen ? 'openBtn' : '' }`}
                    href="#" id="btnHamburger" 
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                </div>
            </div>
        </div>
        <ul className={`nav__menu hide-for-desktop ${isOpen ? 'openMenu' : '' }`}>
        <a href="#services" className="nav__link">
            <li className="nav__item">Servicos</li>
        </a>
        <a href="#aboutus" className="nav__link">
            <li className="nav__item">Sobre nós</li>
        </a>
        <a href="#faq" className="nav__link">
            <li className="nav__item">Faq</li>
        </a>
        <Link to="/signup" className="nav__link">
            <li className="nav__item">Cadastre-se</li>
        </Link>
        <Link to="/login" className="nav__link">
            <li className="nav__item">Log in</li>
        </Link>
        </ul>
  </nav>
  )
}

export default Navbar