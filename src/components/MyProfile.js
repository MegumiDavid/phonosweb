import React, { useState } from 'react'

import myProfilePic from '../images/profile.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPenToSquare,
    faFloppyDisk
} from '@fortawesome/free-solid-svg-icons'

const myProfileData = {
       'name' : 'Megumi David'
}

const MyProfile = () => {
  const [inputValue, setInputValue] = useState(myProfileData.name)
  const [isInput, setIsInput] = useState(false)

  return (
    <div className="myprofile">
        <h1 className="h1">Meu Perfil</h1>
        <div className="mpbox">
            <div className="imgWrap">
                <div className="circle">
                    <img src={myProfilePic} alt="profile" />
                </div>
                <h3 className="name">{myProfileData.name}</h3>
            </div>
            <div className="info">
                <div className="data">
                    <p className="label">Nome</p>
                    <div className="wrap">
                        {
                            isInput ? (
                                <form>
                                    <input value={inputValue} 
                                           onChange={(e) => setInputValue(e.target.value)}
                                    />
                                    <button type='submit'  
                                        onClick={() => setIsInput(false)}>
                                        <i>
                                            <FontAwesomeIcon 
                                                icon={faFloppyDisk} 
                                                onClick={() => myProfileData.name = inputValue}/>
                                        </i>
                                    </button>
                                </form>
                                ) : 
                                (
                                <>
                                    <p className="input">{inputValue}</p> 
                                    <i onClick={() => setIsInput(true)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </i>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="data">
                    <p className="label">CRFA</p>
                    <div className="wrap">
                        <p className="input">12345</p>
                        <i>
                            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                        </i>
                    </div>
                </div>
                <div className="data">
                    <p className="label">Email</p>
                    <div className="wrap">
                        <p className="input">megumi@david.com</p>
                        <i>
                            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile