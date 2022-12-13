import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { loginSetter, crfaLogin } from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../style/Login.scss'
import boxImg from '../images/rectangle1.png'


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('david@fono.com')
  const [pwd, setPwd] = useState('bananadavid.2003')
  const [isVisible, setIsVisible] = useState(false)
 
  const getFonoByEmail = async (accessToken) => {
    const requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
      },
    };

    const response = await fetch(`http://localhost:3000/fonos/`, requestOptions )
    const data = await response.json()
    let crfa
    data.forEach(f => {
      if (f.email === email) {
        crfa = f.crfa
      }
    })
    return crfa
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/authfono/login/',
          JSON.stringify({ 
            email: email,
            password: pwd
          }),
          {
              headers: { 'Content-Type': 'application/json' },
          }
      );

      const accessToken = response?.data?.access_token;
      const currCrfa = await getFonoByEmail(accessToken)
      dispatch(loginSetter(accessToken))
      dispatch(crfaLogin(currCrfa))
      localStorage.setItem("auth", JSON.stringify({loged: true, accessToken: accessToken, currCrfa: currCrfa}))
      navigate('/dashboard')
    } catch (err) {
      if (!err?.response) {
        alert('Sem resposta do servidor');
      } else if (err.response?.status === 400) {
        alert('Faltando dados');
      } else if (err.response?.status === 401) {
        alert('Não Autorizado');
      } else {
          alert('Falha Login');
      }
    }
  }

  return (
      <div className="body">
        <img src={boxImg} alt="rectangle" className="bodyBox1"/>
        <span className="line"></span>
        <div className="loginContainer">
            <div className="box">
                <h1>Faça seu Login, <span className="highlight">Fono</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputWrapper">
                        <label htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          autoComplete="off"
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
                        />
                        <button type="button" onClick={() => setIsVisible(!isVisible)}>
                            <i>
                              {isVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                            </i>
                        </button>
                    </div>
                    <button type="submit" className="btn">Entrar</button>
                </form>        
                <p>Não possui sua conta? <Link to='/signup' className='ctaLink'>Sign up</Link></p>    
            </div>
        </div>
        <img src={boxImg} alt="rectangle" className="bodyBox2"/>
    </div>
  )
}

export default Login