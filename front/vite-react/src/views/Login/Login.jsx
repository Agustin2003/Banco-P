import React, { useState } from "react";
import axios from "axios"
import {useDispatch} from "react-redux"
import { setUserData } from "../../components/redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import validateLogin from "../../helper/validateLogin";
const POSTUSERLOGIN_URL = "http://localhost:3000/users/login"

export default function Login() {

//name, email, birthdate, nDni, username, password
const initialState ={
    username: "",
    password: "",
}

// ESTADOS
    const [user, setUser] = useState(initialState);

    const [errors, setErrors] = useState(initialState);




//* HANDLERS

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        
        axios.post(POSTUSERLOGIN_URL, user)
            .then(response => response.data)
            .then(data => {
                dispatch(setUserData(data));
                alert (`Usuario logueado!`);
                navigate("/appointments");
            })
            .catch((error) => alert(`Acceso denegado: ${error?.response?.data?.message}`))

        setUser(initialState);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUser({
            ...user,
            [name]: value
        });

        setErrors (validateLogin({
            ...user,
            [name]: value
        }));
    }


// DATOS DE FORMULARIO
    const formData = [
        { label: "Nombre de usuario", name: "username", type: "text", placeholder: "ingresar nombre de usuario"},
        { label: "Contraseña", name: "password", type: "password", placeholder: "ingresar contraseña"},
    ]

    return (
        <div className="login-box">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-content">
                        {
                            formData.map(({ label, name, type, placeholder }) => {
                                return(
                                    <div key={name} >
                                        <label htmlFor={name}> {label} </label>
                                        <input
                                            className="input"
                                            id={name}
                                            name={name}
                                            value={user[name]}
                                            type={type}
                                            placeholder={placeholder}
                                            onChange={handleChange}
                                        />
                                        {
                                            errors[name] && <span style={{
                                                color: '#ff0000',
                                            }}> {errors[name]} </span> 
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button className="login-btn" onClick={handleSubmit} type="submit" disabled={Object.keys(user).some(e => !user[e])}>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    ) }
    