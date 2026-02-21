import express from "express";
<<<<<<< HEAD
import { register } from "../controllers/auth.controller.js";
const router = express.Router();

router.post ("/register", register);



export default router;
=======

import { register } from "../controllers/auth.controller.js";

import { registerValidation, validate } from "../middleware/user.validation.js";

const router = express.Router();

router.post(
    "/register", registerValidation, validate, register
);

export default router;
>>>>>>> c82e37f7e3fddde3c29445d0769e2e4cb9f27ceb
