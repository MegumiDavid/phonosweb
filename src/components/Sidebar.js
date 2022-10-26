import React, { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import logo from '../images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import '../style/Dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faVideo,
  faHouse,
  faGamepad,
  faArrowRightFromBracket
 } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const navigate = useNavigate()
  const { auth, setAuth } = useContext(AuthContext)
  const logOut = () => {
    setAuth({
        loged: false
    })
    localStorage.setItem("auth", JSON.stringify(auth))
    navigate('/')
  }

  return (
    <div className="sidebar">
        <div className="logo">
            <Link to='/dashboard'>
                <img src={logo} alt="phonos" className="logo" />
            </Link>
            <div className="hideSm">Phonos.</div>
        </div>
        <nav className="nav">
            <ul>
                <Link to="/dashboard" className="navlink">
                    <li className="navitem hideSm">Home</li>
                    <li className="navitem hideBg">
                    <i>
                        <FontAwesomeIcon icon={faHouse} />
                    </i>
                    </li>
                </Link>
                <div className="dashboardLine hideSm"></div>
                <Link to="/joguinhos" className="navlink">
                    <li className="navitem hideSm">Joguinhos</li>
                    <li className="navitem hideBg">
                    <i>
                        <FontAwesomeIcon icon={faGamepad} />
                    </i>
                    </li>
                </Link>
                <div className="dashboardLine hideSm"></div>
                <Link to="/videochat" className="navlink">
                    <li className="navitem hideSm">Video Chamada</li>
                    <li className="navitem hideBg">
                    <i>
                        <FontAwesomeIcon icon={faVideo} />
                    </i>
                    </li>
                </Link>
            </ul>
        </nav>
        <button className="logout" onClick={logOut}>
        <i>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </i>
        <div className="hideSm">
                Sair
        </div>
        </button>
    </div>  
  )
}

export default Sidebar