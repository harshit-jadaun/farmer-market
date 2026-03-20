import Image from "../models/image.model.js";

export const uploadImage = async (req, res) => {
  try {

    const img = new Image({
      userId: req.userId,
      imageUrl: req.file.path,
      public_id: req.file.filename
    });

    await img.save();

    res.status(201).json({
      message: "Image uploaded successfully",
      image: img
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};