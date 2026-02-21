<<<<<<< HEAD
=======
import express from "express";
import { verifyToken } from "../middleware/auth.validation.js";
import { register } from "../controllers/auth.controller.js";


const router = express.Router();

router.post(
    "/register",  register
);

router.get("/login", verifyToken, (req, res) => {

    res.json(req.user);

}
);

export default router;
>>>>>>> origin/working
