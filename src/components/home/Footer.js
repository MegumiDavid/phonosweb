import React from 'react'
import logo from '../../images/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPhone,
    faEnvelope
 } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <a href="/" className="logo">
            <img src={logo} alt="david-fono" />
            Phonos<span>.</span>
          </a>
          <div className="row">
            <p className="footer__text">
              Phonos Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor
            </p>
            <div className="links-wrapper">
              <div className="links">
                <div className="title">link</div>
                <ul>
                  <li><a href="#services">Serviços</a></li>
                  <li><a href="#aboutus">Sobre nós</a></li>
                  <li><a href="#faq">Faq</a></li>
                </ul>
              </div>

              <div className="links">
                <div className="title">Contatos</div>
                <ul>
                  <li>
                    <i className="icon"> <FontAwesomeIcon icon={faEnvelope} /></i><a href="mailto: contato@david.com.br"
                      >contato@david.com.br</a
                    >
                  </li>
                  <li>
                    <i className="icon"><FontAwesomeIcon icon={faPhone} /></i>
                    <a target="_blank" href="tel:+55 19 98889-0000"
                      >+55 19 98889-0000</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copyright">©Phonos. Todos direitos reservados</p>
        </div>
      </footer>
    </>
  )
}

export default Footer