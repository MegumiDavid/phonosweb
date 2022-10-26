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
            <h2>Sobre <span>Phonos.</span></h2>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus