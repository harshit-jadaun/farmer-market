import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";
import { createUser } from "../models/user.model.js";
import { generateToken } from "../utils/genrate.token.js";

configDotenv();
//for creating a user
export const register = async (req, res) => {
    const { name, password, mobile_no, otp, role } = req.body;
    try {
        console.log("api hit");
        //hashing password 
        const hashedPassword = await bcrypt.hash(password, 10);
        // finally create user
        const newUser = await createUser(name, hashedPassword, mobile_no, otp, role);

        const token = generateToken(newUser);

        res.status(201).json({

            success: true,

            token,

            newUser

        });

    } catch (err) {
        console.error('Error registering user', err);
        res.status(500).json({ message: "Error registering user" });
    }
};