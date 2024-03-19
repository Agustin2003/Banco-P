export default function validateLogin(input) {

    // LOGIN
    if(!input.username) errors.username = "Debe ingresar un nombre de usuario";
    if (!input.password) errors.password = "Debe ingresar una contraseña";

    return errors;
}