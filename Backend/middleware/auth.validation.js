import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({
      message: "No token"
    });

  try {

    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();

  }

  catch {

    res.status(401).json({
      message: "Invalid token"
    });

  }

};