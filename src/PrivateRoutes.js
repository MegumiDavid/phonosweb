import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { loginSetter } from './actions'
const PrivateRoutes = () => {
  const dispatch = useDispatch()
  const logedState = useSelector(state => state.logerReducer).loged
  let checkElement
  if (!localStorage.getItem('auth')) {
    checkElement = logedState
  } else {
    let lsReturn = JSON.parse(localStorage.getItem('auth'))
    if (lsReturn.loged === true) {
      checkElement = true
      // dispatch(loginSetter(lsReturn.currCrfa))
    } else {
      checkElement = false
    }

  }
  return (
    checkElement  ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes