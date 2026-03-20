import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "farmer-market",
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});

export const upload = multer({ storage });



