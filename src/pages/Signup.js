import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSetter, crfaLogin } from '../actions'
import axios from 'axios'

import '../style/Login.scss'
import boxImg from '../images/rectangle1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

 
 const Signup = () => {
     
     const navigate = useNavigate()
     const dispatch = useDispatch()
     
     const [crfa, setCrfa] = useState('')
     const [email, setEmail] = useState('')
     const [fname, setFname] = useState('')
     const [lname, setLname] = useState('')
     const [pwd, setPwd] = useState('')
     const [isVisible, setIsVisible] = useState(false)

    const authFono = async () => {
        const response = await axios.post('http://localhost:3000/authfono/login/',
            JSON.stringify({ 
                email: email,
                password: pwd
            }),
            {
                headers: { 'Content-Type' : 'application/json' },
            }
        )
        dispatch(loginSetter(response?.data?.access_token))
        dispatch(crfaLogin(crfa))
        localStorage.setItem("auth", JSON.stringify({
            loged: true, accessToken: response?.data?.access_token, currCrfa: crfa
        }))
        navigate('/dashboard')
    }

    const createFono = async () => {
        const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    crfa: crfa,
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: pwd,
                    img: 'https://picsum.photos/200',
                    pacientes: []
                })
        };
        await fetch('http://localhost:3000/fonos/', requestOptions);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        createFono()
        authFono()
        navigate('/dashboard')
    }

    return (
        <div className="body">
            <img src={boxImg} alt="rectangle" className="bodyBox1"/>
            <span className="line"></span>
            <div className="loginContainer">
                <div className="box">
                    <h1>Crie sua conta, <span className="highlight">Fono</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="inputWrapper">
                            <label htmlFor="crfa">CRFA</label>
                            <input 
                                type="text" 
                                id="crfa" 
                                onChange={(e) => {setCrfa(e.target.value)}}
                                value={crfa}
                                required
                                pattern="[0-9]{5}"
                            />
                        </div>
                        <div className="inputWrapper">
                            <label htmlFor="fname">Nome</label>
                            <input 
                            type="text" 
                            id="fname" 
                            onChange={(e) => {setFname(e.target.value)}}
                            value={fname}
                            required
                            />
                        </div>
                        <div className="inputWrapper">
                            <label htmlFor="lname">Sobrenome</label>
                            <input 
                            type="text" 
                            id="lname" 
                            onChange={(e) => {setLname(e.target.value)}}
                            value={lname}
                            required
                            />
                        </div>
                        <div className="inputWrapper">
                            <label htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            onChange={(e) => {setEmail(e.target.value)}}
                            value={email}
                            required
                            />
                        </div>
                        <div className="inputWrapper">
                            <label htmlFor="pwd">Senha</label>
                            <input 
                            type={`${isVisible ? 'text' : 'password'}`}
                            id="pwd" 
                            onChange={(e) => {setPwd(e.target.value)}}
                            value={pwd}
                            required  
                            min={5}
                            />
                            <button type="button" onClick={() => setIsVisible(!isVisible)}>
                                <i>
                                    {isVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                </i>
                            </button>
                        </div>
                        <button type="submit" className="btn">Criar</button>
                    </form>        
                    <p>Já possui sua conta? <Link className="ctaLink" to='/login'>Log in</Link></p>    
                </div>
            </div>
            <img src={boxImg} alt="rectangle" className="bodyBox2"/>
        </div>
    )
}

export default Signup