import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
const { Pool } = pkg;   
import pool from "./db/connection.js";
import router from "./routes/auth.route.js";    
import dotenv, { config, configDotenv } from "dotenv";
import pool from "./db/connection.js";
import router from "./routes/auth.route.js";


configDotenv();


const app = express();
app.use(express.json());
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;




pool.connect();


app.use ("/api/auth", router);

=======

const PORT = process.env.PORT || 3000;

>>>>>>> c82e37f7e3fddde3c29445d0769e2e4cb9f27ceb

app.get("/", (req, res) => {
    res.send("server is working fine !");
});

pool.connect();

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} ..`);
});
