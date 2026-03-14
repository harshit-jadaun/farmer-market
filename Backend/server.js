<<<<<<< HEAD
import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
const { Pool } = pkg;   
import pool from "./db/connection.js";
import router from "./routes/auth.route.js";    
import dotenv, { config, configDotenv } from "dotenv";

=======
import express, { response } from "express";
import connection from "./db/mongoDB.js";
import router from "./routes/auth.route.js";
import imageRouter from "./routes/image.route.js";
import dotenv from "dotenv";
>>>>>>> working

dotenv.config();

const app = express();
app.use(express.json());
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;




pool.connect();


=======

const PORT = process.env.PORT || 3000;

app.use("/api", router,imageRouter);
>>>>>>> working

app.get("/", (req, res) => {
    res.send("server is working fine !");
});

await connection() ;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
