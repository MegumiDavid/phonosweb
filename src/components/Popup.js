import React, { useContext, useEffect, useState } from 'react';
import myProfilePicture from '../images/anonimous-profile.png'
import PopupContext from '../context/PopupProvider';
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Popup = () => {
    const accessToken = useSelector(state => state.logerReducer).accessToken
    const currCrfa = useSelector(state => state.crfaReducer).currCrfa
    const { isOpen, setIsOpen, currPopup, currPacienteToken, isChange, setIsChange } = useContext(PopupContext)
    const [paciente, setPaciente] = useState({})

    // Add patient inputs
    const [fnome, setFnome] = useState('')
    const [lnome, setLnome] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [condicao, setCondicao] = useState('')
    const [consPaciente, setConsPaciente] = useState('')
    const [consData, setConsData] = useState('')
    const [consHora, setConsHora] = useState('')

    const getPacientes = async () =>  {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
          }
        const response = await fetch(`http://localhost:3000/pacientes/${currPacienteToken}`, requestOptions)
        const data = await response.json()
        setPaciente(data)
        console.log(currPacienteToken);
        console.log(data);
        console.log(paciente);
    } 

    useEffect(() => {
        getPacientes()
    }, [currPacienteToken])

    const onAddPatient = async (e) => {
        e.preventDefault()
        const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ 
                    fname: fnome,
                    lname: lnome,
                    condicao: condicao,
                    bday: dataNasc,
                    img: 'https://picsum.photos/200',
                    fonos: [currCrfa]
                })
        };

        const response = await fetch('http://localhost:3000/pacientes/', requestOptions);
        const data = await response.json();
        console.log(data)
        alert('Paciente criado com sucesso')
        setIsChange(!isChange)
        setIsOpen(false)
        setCondicao('')
        setDataNasc('')
        lnome('')
        fnome('')
    }   

    const onEditPacient = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ 
                token: paciente.token,
                fname: paciente.fname,
                lname: paciente.lname,
                bday: paciente.bday,
                img: paciente.img,
                fonos: paciente.fonos,
                password: paciente.password,
                firstLogin: paciente.firstLogin,
                condicao: condicao
            })
        };
        const response = await fetch(`http://localhost:3000/pacientes/${currPacienteToken}`, requestOptions);
        const data = await response.json();
        console.log(data)
        alert('Paciente alterado com sucesso')
        setIsChange(!isChange)
        setCondicao('')
    }


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
                    <form className="info" onSubmit={onAddPatient}>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Primeiro Nome</p>
                                <input type="text" required className="input" id="iconified" onChange={(e) => setFnome(e.target.value)} />
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Ultimo Nome</p>
                                <input type="text" required  className="input" id="iconified" onChange={(e) => setLnome(e.target.value)} />
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Data nascimento</p>
                                <input type="date" required className="input" id="iconified" onChange={(e) => setDataNasc(e.target.value)}/>
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Condicao</p>
                                <input type="text" required className="input" id="iconified" onChange={(e) => setCondicao(e.target.value)}/>
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
                            <img src={paciente?.img === 'assets/avatar_morcego.png'? require(`../images/${paciente?.img}`) : paciente?.img} alt="profile" />
                        </div>
                    </div>
                    <form className="info" onSubmit={onEditPacient}>

                        <div className="data showData">
                                <p className="label">Nome</p>
                                <p className="inputShow">{`${paciente?.fname} ${paciente?.lname}`}</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Token</p>
                                <p className="inputShow">{paciente?.token}</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Data Nasc</p>
                                <p className="inputShow">{paciente?.bday}</p>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Condição</p>
                                <input type="text" required className="input" id="iconified" onChange={(e) => setCondicao(e.target.value)} />
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
                    <h3>Editar agendamento</h3>            
                    <form className="info">

                        <div className="data">
                            <div className="wrap">
                                <p className="label">Paciente</p>
                                <input type="text" required className="input" id="iconified" onChange={(e) => setConsPaciente(e.target.value)}/>
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Nova data</p>
                                <input type="date" required className="input" id="iconified" onChange={(e) => setConsData(e.target.value)}/>
                            </div>
                        </div>
                        
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Nova Horario</p>
                                <input type="text" required className="input" id="iconified" onChange={(e) => setConsHora(e.target.value)}/>
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
                                <input type="text" required className="input" id="iconified" />
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