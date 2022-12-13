import React from 'react'
import '../style/Dashboard.scss'
import Sidebar from '../components/Sidebar'

import joguinho1 from '../images/forca.png'
import joguinho2 from '../images/caçapalavra.png'
import joguinho3 from '../images/joguinhos3.png'

import Topbar from '../components/Topbar'
import Game from '../components/Game'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass
 } from '@fortawesome/free-solid-svg-icons'

const Joguinhos = () => {
  return (
    <div className="gridWrapper">
      <Sidebar />
        <main className="main">
            <div className="topbar">
                <Topbar text={'Joguinhos '} hlightedText={'Phonos'}/>
            </div>

            <section className="gameSection">
                    {/* <div className="form">
                        <div className="inputWrapper">
                            <input type="text" className="input" id="iconified" placeholder="procurar joguinhos"/>
                            <button className="btnSubmit">
                              <i>
                                <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} style={{color: 'white'}}/>
                              </i>
                          </button>
                          </div>
                        <button className="category">
                            Categorias
                        </button>
                    </div> */}

                    <div className="games">
                        <Game 
                            id={1}
                            link="http://localhost:8000/"
                            img={joguinho1}
                            title={'Jogo da Forca'}
                            desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                        />
                        <Game 
                            id={2}
                            link="http://localhost:8000/"
                            img={joguinho2}
                            title={'Caça Palavra'}
                            desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                        />
                        <Game 
                            id={3}
                            link="http://localhost:8000/"
                            img={joguinho3}
                            title={'Jogo da Memoria'}
                            desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                        />
                    </div>
            </section>
        </main>
    </div>
  )
}

export default Joguinhos