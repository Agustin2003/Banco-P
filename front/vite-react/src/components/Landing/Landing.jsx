import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; 

export default function Landing() {
    return (
        <div className="landing-box">
            <div className="landing-container">
                <div className="landing-content">
                    <h1 className="landing-header">Bienvenido/a al Banco Provincia</h1>
                    <h2>Reserva tus turnos presenciales desde nuestra pagina web!</h2>
                    <h3>¿Es tu primera vez en nuestra App?</h3>
                    <Link to="/register">
                        <button className="landing-btn landing-register-btn">Registrate</button>
                    </Link>
                    <h3>¿Ya tienes una cuenta?</h3>
                    <Link to="/login">
                        <button className="landing-btn landing-login-btn">Iniciar Sesión</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
