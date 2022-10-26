import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

import '../style/Login.scss'
import boxImg from '../images/rectangle1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEye,
  faEyeSlash
 } from '@fortawesome/free-solid-svg-icons'

 
 const Signup = () => {
     
     const { setAuth } = useContext(AuthContext)
     const navigate = useNavigate()
     
     const [crfa, setCrfa] = useState('')
     const [email, setEmail] = useState('')
     const [pwd, setPwd] = useState('')
     const [errMsg, setErrMsg] = useState('')
     const [isVisible, setIsVisible] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try { 
          // createUser()
          setCrfa('')
          setEmail('')
          setPwd('')

          setAuth({ loged: true, crfa: crfa, email: email ,pwd: pwd })
          navigate('/dashboard')
        } catch (err) { 
            // if !err?.response alert('No server response')
            // else if err.response?.status === 400 alert('missing crfa or pwd')
            // else if err.response?.status === 401 alert('unauthorized')
            // else err.response?.status === 401 alert('login falided')
        }
      }

    return (
        <div className="body">
            <img src={boxImg} alt="rectangle" className="bodyBox1"/>
            <span className="line"></span>
            <div className="loginContainer">
                <div className="box">
                {/* <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                    <h1>Crie sua conta, <span className="highlight">Fono</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div class="inputWrapper">
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
                        <div class="inputWrapper">
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
                        <button type="submit" class="btn">Entrar</button>
                    </form>        
                    <p>Já possui sua conta? <Link className="ctaLink" to='/login'>Log in</Link></p>    
                </div>
            </div>
            <img src={boxImg} alt="rectangle" className="bodyBox2"/>
        </div>
  )
}

export default Signup