import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserAppointments, setUserData } from '../redux/userSlice';

export default function NavbarComponent() {

  const login = useSelector(state => state.actualUser.userData.login);

  const dispatch = useDispatch();
  const navigate =useNavigate();
  const handleLogout = () => {
    const confirm = window.confirm("¿Deseas cerrar sesión?");
    if(confirm){
      dispatch(setUserData({}));
      dispatch(setUserAppointments([]));
      navigate("/");
    }
  }

  return (
    <> {login &&
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto justify-content-end">
            <NavLink className="navLink" to="/home">Home</NavLink>
            {
              login && <NavLink className="navLink" to="/appointments">Turnos</NavLink>
            }
            <NavLink className="navLink" to="/appointmentForm">Pedir turno</NavLink>
            {login
              ?  <span onClick={handleLogout} className="navLink">Logout</span> 
              : <NavLink className="navLink" to="/login"> <span>Login</span> </NavLink>
            }
          </Nav>
        </Container>
      </Navbar>

    }
    </>
  )
}

