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
        </div>
        <nav className="nav">
            <ul>
                <li className='navitem'>
                    <Link to="/dashboard" className="navlink">
                        <i>
                            <FontAwesomeIcon icon={faHouse} />
                        </i>
                    </Link>
                </li>
                <li className='navitem'>
                    <Link to="/joguinhos" className="navlink">
                        <i>
                            <FontAwesomeIcon icon={faGamepad} />
                        </i>
                    </Link>
                </li>
                <li className='navitem'>
                    <Link to="/consultas" className="navlink">
                        <i>
                            <FontAwesomeIcon icon={faVideo} />
                        </i>
                    </Link>
                </li>
            </ul>
        </nav>
        <button className="logout" onClick={logOut}>
        <i>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </i>
        </button>
    </div>  
  )
}

export default Sidebar