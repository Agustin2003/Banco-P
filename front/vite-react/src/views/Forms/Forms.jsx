import { useState } from "react"
import validateUser from "../../helper/validateUser";

function Form() {
const [input, setInput] = useState({
name: "",
email: "",
password: "",
});

const [errors, setErrors] = useState({
name: "Debe ingresar un nombre"
});

const handleChange = (event) => {
// console.log(event.target.value);
setInput({
...input,
[event.target.name]: event.target.value
});

setErrors (validateUser({
...input,
[event.target.name]: event.target.value
}));
}

const handleSubmit = (event) => {
    event.preventDefault();
    //* PETICIÓN AL BACK
    alert(`
    Datos enviados...
    Nombre: ${input.name}
    Email: ${input.email}
    `);
    setInput({
    name: "",
    email: "",
    password: "",
    });
    }

    return (
    <div>
    <h1></h1>
    <hr />
    <form onSubmit={handleSubmit}>
    <label htmlFor="name" >Nombre: </label>
    <input
    id="name"
    name="name"
    value={input.name}
    type="text"
    placeholder="Ingresa tu nombre..."
    onChange={handleChange}
    />
    <p style={{ color: "red" }} > {errors.name ? errors.name: null}</p>

    <label htmlFor="email" >Email: </label>
    <input
    id="email"
    name="email"
    value={input.email}
    type="text"
    placeholder="Ingresa tu email..."
    onChange={handleChange}
    />
    <p style={{ color: "red" }} > {errors.email && errors.email}</p>

    <label htmlFor="password" >Contraseña: </label>
    <input
    id="password"
    name="password"
    value={input.password}
    type="password"
    placeholder="Ingresa tu password..."
    onChange={handleChange}
    />
    <p style={{ color: "red" }} > {errors.password ? errors.password: null}</p>

    <input 
    type="submit" 
    value="Enviar"
    disabled={errors.name || errors.email || errors.password}
    />

    </form>

    </div>

    )
}

export default Form;
 