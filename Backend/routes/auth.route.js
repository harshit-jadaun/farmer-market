import express from "express";

import { register } from "../controllers/auth.controller.js";

import { registerValidation, validate } from "../middleware/user.validation.js";

const router = express.Router();

router.post(
    "/register", registerValidation, validate, register
);

export default router;