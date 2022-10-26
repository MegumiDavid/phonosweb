import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGlobe,
    faDumbbell, 
    faGamepad,
    faComments,
    faCircleChevronRight
 } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section className="services appear" id="services">
      <div className="container">
        <div className="title">
          <sub>Serviços</sub>
          <h2>
            Ótimos Serviços para todos, <span className="highlight">Fonos</span> e
            <span className="highlight"> Pacientes</span>
          </h2>
        </div>
        <div className="hmcards">
          <div className="hmcard">
            <div className="hmbox hmbox--1">
              <div className="icon-box">
                <i>
                  <FontAwesomeIcon icon={faGlobe} />
                </i>
              </div>
            </div>
            <h3>Consulta online</h3>
            <p>Lorem ipsum is placeholder text commonly used in the graphic</p>
          </div>
          <div className="hmcard">
            <div className="hmbox hmbox--2">
              <div className="icon-box">
                <i>
                  <FontAwesomeIcon icon={faDumbbell} />
                </i>
              </div>
            </div>
            <h3>Exercicios</h3>
            <p>Lorem ipsum is placeholder text commonly used in the graphic</p>
          </div>
          <div className="hmcard">
            <div className="hmbox hmbox--3">
              <div className="icon-box">
                <i>
                  <FontAwesomeIcon icon={faGamepad} />
                </i>
              </div>
            </div>
            <div className="text">
              <h3>Jogos</h3>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic
              </p>
            </div>
          </div>
          <div className="hmcard">
            <div className="hmbox hmbox--4">
              <div className="icon-box">
                <i>
                  <FontAwesomeIcon icon={faComments} />
                </i>
              </div>
            </div>
            <h3>Chat Video e Texto</h3>
            <p>Lorem ipsum is placeholder text commonly used in the graphic</p>
          </div>
        </div>

        <Link to="/signup" className="btnOutline">
          Cadestre-se agora
          <i className="icon">
                  <FontAwesomeIcon icon={faCircleChevronRight} />
          </i>
        </Link>
      </div>
    </section>
  )
}

export default Services