// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashboardWrap from './pages/DashboardWrap'
import Joguinhos from './pages/Joguinhos'
import ThisGame from './pages/ThisGame'
// import ConsultasWrap from './pages/ConsultasWrap'
import Consultas from './pages/Consultas'
import ConsultasWrap1 from './pages/ConsultasWrap1'
import Consultas2 from './pages/Consultas2'
// import Consultas1 from './pages/Consultas1'
import Error from './pages/Error'

// Routes
import PrivateRoutes from './PrivateRoutes'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const App = () => {

  return (
    <AuthProvider>
      <Routes>

        <Route element={<PrivateRoutes/>}>
            <Route path='/dashboard' element={<DashboardWrap/>} />
            <Route path='/consultas' element={<Consultas/>} />
            <Route path='/consultas1' element={<ConsultasWrap1 />} />
            <Route path='/consultas2' element={<Consultas2 />} />
            <Route path='/joguinhos' element={<Joguinhos/>} />
            <Route path='/joguinhos/:id' element={<ThisGame/>} />
        </Route>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </AuthProvider>
  );
}

export default App;
