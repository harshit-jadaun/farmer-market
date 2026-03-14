import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const connection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("MongoDb connected succesfully");

    } catch (error) {
        console.error("Mongodb connection failed");
        process.exit(1);
    }
}

export default connection ;