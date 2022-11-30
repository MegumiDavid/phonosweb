import React from 'react'
import aboutusImg from '../../images/aboutus-phonos.png'

const Aboutus = () => {
  return (
    <section className="aboutus appear" id="aboutus">
      <div className="container">
        <div className="row">
          <div className="colOneTwo">
            <img src={aboutusImg} alt="fono" className="fonoimg" />
          </div>
          <div className="colOneTwo">
            <h2>Sobre o<span> Team Phonos</span></h2>
            <p>
              Desde cedo, nossa equipe de desenvolvimento teve contato com a fonoaudiologia, seja por ter que passar por tratamentos dessa espécie, seja por ter contato com profissionais da área. Nesse âmbito vimos que havia certa demanda de meios digitais que facilitassem o trabalho desses profissionais.
            </p>
            <p>
              Tendo em vista o mercado de softwares de fonoaudiologia, que é predado por produtos caros e com poucas funcionalidades, decidimos desenvolver um produto que atendesse melhor às necessidades dos fonoaudiólogos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus