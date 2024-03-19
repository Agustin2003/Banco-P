const nodemailer = require("nodemailer");


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "gustinigni@gmail.com",
      pass: "mltx gjro jkhi qwrs",
    },
  });