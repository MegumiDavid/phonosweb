import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../images/logo.svg'
import '../style/Dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faVideo,faHouse, faGamepad, faArrowRightFromBracket
 } from '@fortawesome/free-solid-svg-icons'

 import { useDispatch } from 'react-redux'
 import { logoutSetter } from '../actions'

const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const logOut = () => {
    dispatch(logoutSetter())
    localStorage.setItem("auth", JSON.stringify({ loged: false, currCrfa: '' }))
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