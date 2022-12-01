import React, { useContext } from 'react';
import myProfilePicture from '../images/anonimous-profile.png'
import PopupContext from '../context/PopupProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXmark,
 } from '@fortawesome/free-solid-svg-icons'

const Popup = () => {
    const { isOpen, setIsOpen, currPopup } = useContext(PopupContext)
    return (
    <>
        {
            currPopup === 'addPatient' && 
            (
                <div className={`addPatient ${isOpen ? 'show' : ''} `}>
                    <div className="closeSection">
                            <button onClick={ () => setIsOpen(false) }>
                                <i> <FontAwesomeIcon icon={faXmark} /> </i>
                            </button>
                    </div>
                    <div className="imgWrap">
                        <div className="circle">
                            <img src={myProfilePicture} alt="profile" />
                        </div>
                    </div>
                    <form className="info">
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Nome</p>
                                <input type="text" className="input" id="iconified" />
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Data nascimento</p>
                                <input type="date" className="input" id="iconified" />
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Condicao</p>
                                <input type="text" className="input" id="iconified" />
                            </div>
                        </div>
                        <div className="btnSection">
                            <button type="submit" className="submitPacient">
                                Criar
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
        {
            currPopup === 'editPatient' && 
            (
                <div className={`addPatient ${isOpen ? 'show' : ''} `}>
                    <div className="closeSection">
                            <button onClick={ () => setIsOpen(false) }>
                                <i> <FontAwesomeIcon icon={faXmark} /> </i>
                            </button>
                    </div>
                    <div className="imgWrap">
                        <div className="circle">
                            <img src={myProfilePicture} alt="profile" />
                        </div>
                    </div>
                    <form className="info">

                        <div className="data showData">
                                <p className="label">Nome</p>
                                <p className="inputShow">David Martinez</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Token</p>
                                <p className="inputShow">12345</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Data Nasc</p>
                                <p className="inputShow">26/02/2003</p>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Principal defiencia</p>
                                <input type="text" className="input" id="iconified" />
                            </div>
                        </div>
                        <div className="btnSection">
                            <button type="submit" className="submitPacient">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
        {
            currPopup === 'editConsulta' && 
            (
                <div className={`addPatient ${isOpen ? 'show' : ''} `}>
                    <div className="closeSection">
                            <button onClick={ () => setIsOpen(false) }>
                                <i> <FontAwesomeIcon icon={faXmark} /> </i>
                            </button>
                    </div>
                    <h3>Novo agendamento</h3>            
                    <form className="info">

                        <div className="data">
                            <div className="wrap">
                                <p className="label">Paciente</p>
                                <input type="text" className="input" id="iconified" />
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Data agendamento</p>
                                <input type="date" className="input" id="iconified" />
                            </div>
                        </div>
                        
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Principal defiencia</p>
                                <input type="text" className="input" id="iconified" />
                            </div>
                        </div>

                        <div className="btnSection">
                            <button type="submit" className="submitPacient">
                                Criar
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
        {
            currPopup === 'addConsulta' && 
            (
                <div className={`addPatient ${isOpen ? 'show' : ''} `}>
                    <div className="closeSection">
                            <button onClick={ () => setIsOpen(false) }>
                                <i> <FontAwesomeIcon icon={faXmark} /> </i>
                            </button>
                    </div>
                    <div className="imgWrap">
                        <div className="circle">
                            <img src={myProfilePicture} alt="profile" />
                        </div>
                    </div>
                    <form className="info">

                        <div className="data showData">
                                <p className="label">Nome </p>
                                <p className="inputShow">David Martinez</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Token</p>
                                <p className="inputShow">12345</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Data Nasc</p>
                                <p className="inputShow">26/02/2003</p>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Principal defiencia</p>
                                <input type="text" className="input" id="iconified" />
                            </div>
                        </div>
                        <div className="btnSection">
                            <button type="submit" className="submitPacient">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
    </>
    )
}

export default Popup 