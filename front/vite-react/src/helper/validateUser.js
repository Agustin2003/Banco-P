export default function validateUser(input) {
    const emailRegExp = /\S+@\S+\.\S+/;
    const errors = {};
    const expresionRegularUsuario = /^[a-zA-Z0-9]{3,12}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{8,20}$/;
    const expresionRegularCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
    const expresionRegularDNI = /^[0-9]{8,9}$/;
    const expresionRegularDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    
    //* NOMBRE
    input.name = input.name.trim();
    if(!input.name) errors.name = "Debe ingresar un nombre";
    else {
        if(input.name.length < 3) errors.name = "Nombre debe tener al menos 5 caracteres";
        if(input.name.length > 25) errors.name = "Nombre debe tener máximo 15 caracteres";
    }

    //* EMAIL
    if(!input.email) errors.email = "Debe ingresar un email";
    else {
        if(!emailRegExp.test(input.email)) errors.email = "Debe ingresar un email válido";
    }

    //* PASSWORD
    if(!input.password) errors.password = "Debe ingresar una contraseña";
    else {
        if(input.password.length > 15) errors.password = "Contraseña debe tener máximo 8 caracteres";
        if(input.password.length < 4) errors.password = "Contraseña debe tener al menos 4 caracteres";
    }

    // CONFIRMPASSWORD
    if(input.password !== input.confirmpassword) errors.confirmpassword = "Las contraseñas no coinciden";


    return errors;
}
