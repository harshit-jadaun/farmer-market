import express from "express";
import { verifyToken } from "../middleware/auth.validation.js";
import { upload } from "../middleware/upload.js";
import { uploadImage } from "../controllers/imageUpload.controller.js";

const imageRouter = express.Router();

imageRouter.post("/upload", verifyToken, upload.single("photo"), uploadImage);

export default imageRouter;