import bcrypt from "bcrypt";
import { createUser } from "../models/user.model.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body; 
    try {
        console.log("api hit");
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(name, email, hashedPassword); 
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (err) {
        console.error('Error registering user', err);
        res.status(500).json({ message: "Error registering user" });
    }       
};