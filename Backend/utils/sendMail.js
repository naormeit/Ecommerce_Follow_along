const nodemailer = require("nodemailer");

const sendMail = async (options) =>{
    const transporter = nodemailer.createTransport({
        host : process.env.SMTP_HOST,
        port : process.env.SMTP_PORT,
        secure: false,
        service: process.env.SMTP_SERVICE,
        auth : {
            user : process.env.SMTP_EMAIL,
            pass : process.env.SMTP_PASSWORD
        }
    });
}