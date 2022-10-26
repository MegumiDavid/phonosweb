import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from './context/AuthProvider'
const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext)
  let checkElement
  if (localStorage.getItem('auth')) {
    checkElement = localStorage.getItem('auth')
  } else {
    checkElement = auth.loged
  }
return (
    checkElement  ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes