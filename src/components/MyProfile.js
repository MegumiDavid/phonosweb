import React, { useState, useRef, useEffect  } from 'react'

import myProfilePic from '../images/profile.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

const myProfileData = {
       'name' : 'Megumi David'
}

const MyProfile = () => {
  const [inputValue, setInputValue] = useState(myProfileData.name)
  const [isInput, setIsInput] = useState(false)
  const [fonoData, setFonoData] = useState([])
  
  const getMyProfile = async () =>  {
    const response = await fetch(`http://localhost:3000/fonos/${12345}`)
    const data = await response.json()
    setFonoData(data[0])
  } 

  useEffect(() => {
    getMyProfile()
  }, [])

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  const handleClick = () => {
    myProfileData.name = inputValue
    focusInput()
  }

  return (
    <div className="myprofile">
        <h1 className="h1">Meu Perfil</h1>
        <div className="mpbox">
            <div className="imgWrap">
                <div className="circle">
                    <img src={fonoData.img} alt="profile" />
                </div>
                <h3 className="name">{`${fonoData.fname} ${fonoData.lname}`}</h3>
            </div>
            <div className="info">
                {/* <div className="data">
                    <p className="label">Nome</p>
                    <div className="wrap">
                        {
                            isInput ? (
                                <form>
                                    <input value={inputValue} ref={inputElement}
                                           onChange={(e) => setInputValue(e.target.value)}
                                    />
                                    <button type='submit' 
                                        onClick={() => setIsInput(false)}>
                                        <i>
                                            <FontAwesomeIcon 
                                                icon={faFloppyDisk} 
                                                onClick={handleClick}
                                            />
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
                </div> */}
                <div className="data">
                    <p className="label">Nome</p>
                    <div className="wrap">
                        <p className="input">{`${fonoData.fname} ${fonoData.lname}`}</p>
                        <i>
                            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                        </i>
                    </div>
                </div>
                <div className="data">
                    <p className="label">CRFA</p>
                    <div className="wrap">
                        <p className="input">{fonoData.crfa}</p>
                        <i>
                            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                        </i>
                    </div>
                </div>
                <div className="data">
                    <p className="label">Email</p>
                    <div className="wrap">
                        <p className="input">{fonoData.email}</p>
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