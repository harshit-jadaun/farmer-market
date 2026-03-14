import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";
import { createUser } from "../models/user.model.js";
import { generateToken } from "../utils/genrate.token.js";

configDotenv();
//for creating a user
export const register = async (req, res) => {
<<<<<<< HEAD
    const { name, email, password } = req.body;
=======
    const { name, password, mobile_no, otp, role } = req.body;
>>>>>>> working
    try {
        //hashing password 
        const hashedPassword = await bcrypt.hash(password, 10);
<<<<<<< HEAD
        const newUser = await createUser(name, email, hashedPassword);
        res.status(201).json({ message: "User registered successfully", user: newUser });
=======
        // finally create user
        const newUser = await createUser(name, hashedPassword, mobile_no, otp, role);

        const token = generateToken(newUser);

        res.status(201).json({

            success: true,

            token,

            newUser

        });
>>>>>>> working

    } catch (err) {
        console.error('Error registering user', err);
        res.status(500).json({ message: "Error registering user" });
<<<<<<< HEAD

=======
>>>>>>> working
    }
};