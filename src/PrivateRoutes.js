import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivateRoutes = () => {

  const logedState = useSelector(state => state.logerReducer).loged
  let checkElement
  if (!localStorage.getItem('auth')) {
    checkElement = logedState
  } else {
    let lsReturn = localStorage.getItem('auth')
    if (lsReturn === 'true') {
      checkElement = true
    } else {
      checkElement = false
    }
  }
  return (
    checkElement  ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes