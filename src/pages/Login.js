import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../style/Login.scss'
import boxImg from '../images/rectangle1.png'


const Login = () => {

  const [ auth, setAuth ] = useContext(AuthContext)
  const navigate = useNavigate()
  const crfaRef = useRef()

  const [crfa, setCrfa] = useState('')
  const [pwd, setPwd] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    crfaRef.current.focus()
  }, [])

  const getFonoCrfa = async (crfa) => {
    const response = await fetch(`http://localhost:3000/fonos/${crfa}`)
    const data = await response.json()
    if (data[0].password !== pwd) {
      return false
    }
    setAuth({ loged: !auth, crfa: crfa })
    console.log(auth)
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (await getFonoCrfa(crfa)) {
      setAuth({ loged: !auth, crfa: crfa })
      console.log(auth)
      localStorage.setItem("auth", JSON.stringify(auth))
      navigate('/dashboard')
    } else {
      alert("Dados errados")
    }
      // if !err?.response alert('No server response')
      // else if err.response?.status === 400 alert('missing crfa or pwd')
      // else if err.response?.status === 401 alert('unauthorized')
      // else err.response?.status === 401 alert('login falided')
  }

  return (
      <div className="body">
        <img src={boxImg} alt="rectangle" className="bodyBox1"/>
        <span className="line"></span>
        <div className="loginContainer">
            <div className="box">
                <h1>Faça seu Login, <span className="highlight">Fono</span></h1>
                <form onSubmit={handleSubmit}>
                    <div class="inputWrapper">
                        <label htmlFor="crfa">CRFA</label>
                        <input 
                          type="text" 
                          id="crfa" 
                          ref={crfaRef}
                          autoComplete="off"
                          onChange={(e) => {setCrfa(e.target.value)}}
                          value={crfa}
                          required
                        />
                    </div>
                    <div class="inputWrapper">
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
                    <button type="submit" class="btn">Entrar</button>
                </form>        
                <p>Não possui sua conta? <Link to='/signup' className='ctaLink'>Sign up</Link></p>    
            </div>
        </div>
        <img src={boxImg} alt="rectangle" className="bodyBox2"/>
    </div>
  )
}

export default Login