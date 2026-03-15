import mongoose from "mongoose";

// schema of image   

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  imageUrl: String,
  public_id: String
});

export default mongoose.model("Image", imageSchema);