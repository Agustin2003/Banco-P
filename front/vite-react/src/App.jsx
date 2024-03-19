import './App.css'
import Appointments from './views/Appointments/Appointments'
import Home from './views/Home/Home'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavBar/Navbar'
import AppointmentForm from './views/AppintmentFrom/AppointmentForm'
import Landing from './components/Landing/Landing'


function App() {

  return (
    <>

      <NavbarComponent/>
      <Routes>

        <Route path="/"  element={<Landing/>}  />
        <Route path="/home"  element={<Home/>}  />
        <Route path="/appointments"  element={<Appointments/>}  />
        <Route path="/register"  element={<Register/>}  />
        <Route path="/login"  element={<Login/>}  />
        <Route path="/appointmentform"  element={<AppointmentForm/>}  />
        

      </Routes>

    </>
  )
}

export default App
