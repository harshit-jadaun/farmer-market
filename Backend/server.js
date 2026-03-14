import express, { response } from "express";
import connection from "./db/mongoDB.js";
import router from "./routes/auth.route.js";
import imageRouter from "./routes/image.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", router,imageRouter);

app.get("/", (req, res) => {
    res.send("server is working fine !");
});

await connection() ;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
