import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlus,
    faMinus
 } from '@fortawesome/free-solid-svg-icons'

function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <div className="accordion">
          <div className="accordion-item accordion-item--1" id="question1">
            <a className="accordion-link" href="#question1">
              Lorem, ipsum?
                <FontAwesomeIcon className="fa-plus" icon={faPlus} />
                <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div className="answer answer--1">
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto repellendus, ipsum ducimus doloremque expedita iusto
              facere nihil quam porro dolores tempora nam, dicta, dolorem sit
              blanditiis recusandae. Cupiditate, quibusdam ducimus.</p>
            </div>
          </div>

          <div className="accordion-item accordion-item--2" id="question2">
            <a className="accordion-link" href="#question2">
              Lorem, ipsum?
              <FontAwesomeIcon className="fa-plus" icon={faPlus} />
              <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div className="answer answer--2">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto repellendus, ipsum ducimus doloremque expedita iusto
              facere nihil quam porro dolores tempora nam, dicta, dolorem sit
              blanditiis recusandae. Cupiditate, quibusdam ducimus.</p>
            </div>
          </div>

          <div className="accordion-item accordion-item--3" id="question3">
            <a className="accordion-link" href="#question3">
              Lorem, ipsum?
              <FontAwesomeIcon className="fa-plus" icon={faPlus} />
              <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div className="answer answer--3">
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto repellendus, ipsum ducimus doloremque expedita iusto
              facere nihil quam porro dolores tempora nam, dicta, dolorem sit
              blanditiis recusandae. Cupiditate, quibusdam ducimus.</p>
            </div>
          </div>

          <div className="accordion-item accordion-item--4" id="question4">
            <a className="accordion-link" href="#question4">
              Lorem, ipsum?
              <FontAwesomeIcon className="fa-plus" icon={faPlus} />
              <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div class="answer answer--4">
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto repellendus, ipsum ducimus doloremque expedita iusto
              facere nihil quam porro dolores tempora nam, dicta, dolorem sit
              blanditiis recusandae. Cupiditate, quibusdam ducimus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq