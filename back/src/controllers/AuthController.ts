import { transporter } from "../config/mailer";

const nodemailer = require('nodemailer');

export default enviarMail = async ()=> {
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: 'gustinigni@gmail.com',
        pass:"mltx gjro jkhi qwrs",
     }
    }
        const mensaje = {
        from: 'gustinigni@gmail.com',
        to: 'gustinigni@gmail.com',
        subject: 'Correo de pruebas',
        text: 'Envio de correo desde node js utilizando nodemailer'
    }
        const transport = nodemailer.createTransport (config);
        const info = await transport.sendMail (mensaje);
    }


