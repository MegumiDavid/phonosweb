import React from 'react'
import '../style/Dashboard.scss'
import Sidebar from '../components/Sidebar'

import joguinho1 from '../images/joguinhos1.png'
import joguinho2 from '../images/joguinhos2.png'
import joguinho3 from '../images/joguinhos3.png'
import joguinho4 from '../images/joguinhos4.png'

import Topbar from '../components/Topbar'
import Game from '../components/Game'

import { Link } from 'react-router-dom'

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
                    <div className="form">
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
                    </div>

                    <div className="games">
                        <Game 
                            id={1}
                            img={joguinho1}
                            title={'Jogo da Forca'}
                            desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                        />
                        <Game 
                            id={2}
                            img={joguinho2}
                            title={'Cruzadinha'}
                            desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                        />
                        <Game 
                            id={3}
                            img={joguinho3}
                            title={'Caça Palavra'}
                            desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                        />
                        <Game 
                            id={4}
                            img={joguinho4}
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