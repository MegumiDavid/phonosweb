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
                O Phonos está disponível para quais plataformas?
                <FontAwesomeIcon className="fa-plus" icon={faPlus} />
                <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div className="answer answer--1">
             <p>
                A versão do profissional é feita em Web, e por isso é acessível através de qualquer navegador (Chrome, Firefox, OperaGx, etc). A versão do paciente está disponível para Android, IOS e nos navegadores supracitados.
             </p>
            </div>
          </div>

          <div className="accordion-item accordion-item--2" id="question2">
            <a className="accordion-link" href="#question2">
              Que tipos de jogos estão disponíveis na plataforma?
              <FontAwesomeIcon className="fa-plus" icon={faPlus} />
              <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div className="answer answer--2">
              <p>
                Os jogos disponibilizados no aplicativo são jogos educacionais que auxiliam no desenvolvimento da leitura, escrita, audição e fala de pacientes com problemas no desenvolvimento da linguagem. Aguns exemlplos de jogos disponíveis são: forca, cruzadinha e jogo da memória.
              </p>
            </div>
          </div>

          <div className="accordion-item accordion-item--3" id="question3">
            <a className="accordion-link" href="#question3">
              Um paciente com mais de um fonoaudiólogo precisa de múltiplas contas?
              <FontAwesomeIcon className="fa-plus" icon={faPlus} />
              <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div className="answer answer--3">
              <p>
                Não. Um paciente que possui uma conta ativa pode ser adicionado à lista de outros profissionais que utilizam o Phonos.
              </p>
            </div>
          </div>

          <div className="accordion-item accordion-item--4" id="question4">
            <a className="accordion-link" href="#question4">
              Qual é o preço da plataforma?
              <FontAwesomeIcon className="fa-plus" icon={faPlus} />
              <FontAwesomeIcon className="fa-minus" icon={faMinus} />
            </a>
            <div class="answer answer--4">
              <p>
                A plataforma opera sob um sistema de inscrição mensal ou anual, com um desconto para inscrições anuais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq