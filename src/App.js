// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashboardWrap from './pages/DashboardWrap'
import Joguinhos from './pages/Joguinhos'
import ThisGame from './pages/ThisGame'
import Consultas from './pages/Consultas'
import Error from './pages/Error'
// import Layout from './components/Layout'

// Routes
import PrivateRoutes from './PrivateRoutes'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Routes>

          <Route element={<PrivateRoutes/>}>
              <Route path='/dashboard' element={<DashboardWrap/>} />
              <Route path='/consultas' element={<Consultas/>} />
              <Route path='/joguinhos' element={<Joguinhos/>} />
              <Route path='/joguinhos/:id' element={<ThisGame/>} />
          </Route>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<Error/>}/>

        </Routes>
    </>
  );
}

export default App;
