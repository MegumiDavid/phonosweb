// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Joguinhos from './pages/Joguinhos'
import ThisGame from './pages/ThisGame'
import VideoChat from './pages/VideoChat'
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
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/videochat' element={<VideoChat/>} />
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
