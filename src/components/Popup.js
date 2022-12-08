import React, { useContext, useEffect, useState } from 'react';
import myProfilePicture from '../images/anonimous-profile.png'
import PopupContext from '../context/PopupProvider';
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Popup = () => {
    const currCrfa = useSelector(state => state.logerReducer).currCrfa
    const { isOpen, setIsOpen, currPopup, currPacienteToken, isChange, setIsChange } = useContext(PopupContext)
    const [paciente, setPaciente] = useState([])

    // Add patient inputs
    const [fnome, setFnome] = useState('')
    const [lnome, setLnome] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [condicao, setCondicao] = useState('')

    const getPacientes = async () =>  {
        const response = await fetch(`http://localhost:3000/pacientes/${currPacienteToken}`)
        const data = await response.json()
        setPaciente(data)
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                token: paciente[0].token,
                fname: paciente[0].fname,
                lname: paciente[0].lname,
                bday: paciente[0].bday,
                img: paciente[0].img,
                fonos: paciente[0].fonos,
                password: paciente[0].password,
                firstLogin: paciente[0].firstLogin,
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
                                <input type="text" className="input" id="iconified" onChange={(e) => setFnome(e.target.value)} />
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Ultimo Nome</p>
                                <input type="text" className="input" id="iconified" onChange={(e) => setLnome(e.target.value)} />
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Data nascimento</p>
                                <input type="date" className="input" id="iconified" onChange={(e) => setDataNasc(e.target.value)}/>
                            </div>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Condicao</p>
                                <input type="text" className="input" id="iconified" onChange={(e) => setCondicao(e.target.value)}/>
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
                            <img src={paciente[0].img === 'assets/avatar_morcego.png'? require(`../images/${paciente[0].img}`) : paciente[0].img} alt="profile" />
                        </div>
                    </div>
                    <form className="info" onSubmit={onEditPacient}>

                        <div className="data showData">
                                <p className="label">Nome</p>
                                <p className="inputShow">{`${paciente[0].fname} ${paciente[0].lname}`}</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Token</p>
                                <p className="inputShow">{paciente[0].token}</p>
                        </div>
                        <div className="data showData">
                                <p className="label">Data Nasc</p>
                                <p className="inputShow">{paciente[0].bday}</p>
                        </div>
                        <div className="data">
                            <div className="wrap">
                                <p className="label">Condição</p>
                                <input type="text" className="input" id="iconified" onChange={(e) => setCondicao(e.target.value)} />
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