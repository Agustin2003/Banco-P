import React, { useState } from "react";
import validateUser from "../../helper/validateUser";
import axios from "axios"
import "./AppointmentForm.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validateAppointment from "../../helper/validateAppointment";
const POSTUSER_URL = "http://localhost:3000/users/register"

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

export default function AppointmentForm (props) {

//name, email, birthdate, nDni, username, password
const initialState ={
    date: "",
    time: "",
    //*userId: ,
    description: ""
}

// ESTADOS
    const [appointment, setAppointment] = useState(initialState);

    const [errors, setErrors] = useState({date: "Debe ingresar una fecha"});

    //const validateAppointment = ( { date, time, userId, description} )

//* HANDLERS
const userId = useSelector(state => state.actualUser?.userData?.user?.id);    

const navigate = useNavigate();

const handleSubmit = event => {
        event.preventDefault();
       
        const newAppointment = {
            date: appointment.date,
            time: appointment.time,
            userId: appointment.userId,
            description: appointment.description
            //*{...appointment, userId}
        }

        axios.post(POSTAPPOINTMENT_URL, newAppointment)
            .then(({data}) => data)
            .then((appointmentInDB) => {alert (`Ha sido creado el nuevo turno: 
            Fecha: ${appointmentInDB.data}
            Hora: ${appointmentInDB.time}`);
            navigate("/appointments")
            })
            .catch(error => alert(error.message))

        setUser(initialState);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setAppointment({
            ...appointment,
            [name]: value
        });
            
        setErrors (validateAppointment({
        ...appointment,
           [name]: value
       }));
    }


// DATOS DE FORMULARIO
    const formData = [
        { label: "Fecha", name: "date", type: "date", placeholder: "ingresar fecha"},
        { label: "Horario", name: "time", type: "time", placeholder: "ingresar el horario"},
        { label: "Descripcion", name: "description", type: "text", placeholder: "ingresar información"},
       ]

    return (<div className="appointments-form-box">
    <div className="appointments-form-container">
        <h1 className="appointments-form-title">Registrar turno</h1>
        <div className="appointments-form-content">
        <form onSubmit={handleSubmit}>
            <div className="">
                {formData.map(({ label, name, type, placeholder }) => {
                    return (
                        <div key={name}>
                            <label htmlFor={name}>{label}</label>
                            <input
                                className="input"
                                id={name}
                                name={name}
                                value={appointment[name]}
                                type={type}
                                placeholder={placeholder}
                                onChange={handleChange}
                            />
                            {errors[name] && (
                                <span style={{ color: '#ff0000' }}>
                                    {errors[name]}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
            <div>
                <button
                    className="acept"
                    onClick={handleSubmit}
                    type="submit"
                    disabled={Object.keys(appointment).some(e => !appointment[e])}
                >
                    Crear turno
                </button>
            </div>
        </form>
    </div>
</div>
</div>
    )
    }