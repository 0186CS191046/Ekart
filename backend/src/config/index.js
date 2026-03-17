import dotenv from "dotenv";
dotenv.config();

const config = {
    port : process.env.PORT,
    mongodb_url : process.env.MONGODB_URL,
    mail_user : process.env.MAIL_USER ,
    mail_pass : process.env.MAIL_PASS,
    jwt_secret_key : process.env.JWT_SECRET_KEY
}

export default config;