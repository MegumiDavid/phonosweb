import React, { useContext } from 'react';
import myProfilePicture from '../images/anonimous-profile.png'
import patientProfilePicture from '../images/profile.png'
import PopupContext from '../context/PopupProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXmark
 } from '@fortawesome/free-solid-svg-icons'

const Popup = () => {
    const { isOpen, setIsOpen, currPopup } = useContext(PopupContext)
    return (
    <>
        {
            currPopup === 'addPatient' && 
            (
                <div class={`addPatient ${isOpen ? 'show' : ''} `}>
                    <div class="closeSection">
                            <button onClick={ () => setIsOpen(false) }>
                                <i> <FontAwesomeIcon icon={faXmark} /> </i>
                            </button>
                    </div>
                    <div class="imgWrap">
                        <div class="circle">
                            <img src={myProfilePicture} alt="profile" />
                        </div>
                    </div>
                    <form class="info">
                        <div class="data">
                            <div class="wrap">
                                <p class="label">Nome</p>
                                <input type="text" class="input" id="iconified" />
                            </div>
                        </div>
                        <div class="data">
                            <div class="wrap">
                                <p class="label">Data nascimento</p>
                                <input type="date" class="input" id="iconified" />
                            </div>
                        </div>
                        <div class="data">
                            <div class="wrap">
                                <p class="label">Principal defiencia</p>
                                <input type="text" class="input" id="iconified" />
                            </div>
                        </div>
                        <div class="btnSection">
                            <button type="submit" class="submitPacient">
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
                <div class={`addPatient ${isOpen ? 'show' : ''} `}>
                    <div class="closeSection">
                            <button onClick={ () => setIsOpen(false) }>
                                <i> <FontAwesomeIcon icon={faXmark} /> </i>
                            </button>
                    </div>
                    <div class="imgWrap">
                        <div class="circle">
                            <img src={myProfilePicture} alt="profile" />
                        </div>
                    </div>
                    <form class="info">
                        <div class="data">
                            <div class="wrap">
                                <p class="label">Principal defiencia</p>
                                <input type="text" class="input" id="iconified" />
                            </div>
                        </div>
                        <div class="btnSection">
                            <button type="submit" class="submitPacient">
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