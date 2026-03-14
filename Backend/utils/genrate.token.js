import jwt from "jsonwebtoken";
import dotenv, { configDotenv } from "dotenv"

configDotenv();

const SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {

    return jwt.sign(

        {
            id: user.id,
            name : user.name,
            mobile_no : user.mobile_no,
            role: user.role
        },

        SECRET,

        {
            expiresIn: process.env.JWT_EXPIRE
        }

    );

};