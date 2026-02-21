import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
const { Pool } = pkg;   
import pool from "./db/connection.js";
import router from "./routes/auth.route.js";    
import dotenv, { config, configDotenv } from "dotenv";


configDotenv();


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;




pool.connect();


app.use ("/api/auth", router);


app.listen(PORT ,() =>{
    console.log(`server is running on port ${PORT} ..`);
});
