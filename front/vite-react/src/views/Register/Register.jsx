import React, { useState } from "react";
import validateUser from "../../helper/validateUser";
import axios from "axios"
import './Register.css';
const POSTUSER_URL = "http://localhost:3000/users/register"

export default function Register (props) {

//name, email, birthdate, nDni, username, password
const initialState ={
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmpassword: ""
}

// ESTADOS
    const [user, setUser] = useState(initialState);

    const [errors, setErrors] = useState(initialState);

    //const validateUser = ( {name, email, birthdate, nDni, username, password, confirmpassword} )

//* HANDLERS
    const handleSubmit = event => {
        event.preventDefault();
        const newUser = {name: user.name, email: user.email, birthdate: user.birthdate, nDni: user.nDni, username: user.username, password: user.password}
        
        axios.post(POSTUSER_URL, newUser)
            .then(({data}) => data)
            .then((userInDB) => {alert (`Ha sido creado el usuario ${userInDB.name}!`);
            setUser(initialState);
            })
            .catch(error => alert(error.message))

        setUser(initialState);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUser({
            ...user,
            [name]: value
        });
            
        setErrors (validateUser({
            ...user,
            [name]: value
        }));
    }

    const handleReset = event => {
        event.preventDefault();
        setUser(initialState)
    }

// DATOS DE FORMULARIO
    const formData = [
        { label: "Nombre", name: "name", type: "text", placeholder: "ingresar nombre"},
        { label: "Email", name: "email", type: "email", placeholder: "ingresar email"},
        { label: "Fecha de nacimiento", name: "birthdate", type: "date", placeholder: "ingresar fecha de nacimiento"},
        { label: "Numero de DNI", name: "nDni", type: "text", placeholder: "ingresar numero de DNI"},
        { label: "Nombre de usuario", name: "username", type: "text", placeholder: "ingresar nombre de usuario"},
        { label: "Contraseña", name: "password", type: "password", placeholder: "ingresar contraseña"},
        { label: "Verificar contraseña", name: "confirmpassword", type: "password", placeholder: "ingresar nuevamente la contraseña"}
    ]

    return (


        <div className="registerr-box">
            <div className="register-container">
                    <h1 className="register-title">Registro</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="register-content">
                            {
                                formData.map(({ label, name, type, placeholder }) => {
                                    return (
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
                        <div className="">
                        <button className="register-btn acept" onClick={handleSubmit} type="submit" disabled={Object.keys(user).some(e => !user[e])}>Enviar</button>
                        <button className="register-btn cancel " onClick={handleReset}>Borrar formulario</button>
                        </div>
                    </form>

            </div>
        </div>


    )
    }