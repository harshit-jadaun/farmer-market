import bcrypt from "bcrypt";
import { getUserByMobile } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const login = async (req, res) => {

  const { mobile_no, password } = req.body;

  const user = await getUserByMobile(mobile_no);

  if (!user)
    return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);

  if (!match)
    return res.status(400).json({ message: "Wrong password" });

  const token = generateToken(user);

  res.json({

    token,

    user

  });

};