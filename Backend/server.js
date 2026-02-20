import express from "express";
import bodyParser from "body-parser";
import dotenv, { config, configDotenv } from "dotenv";

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("server is working fine !");
})

app.listen(PORT ,() =>{
    console.log(`server is running on port ${PORT} ..`);
});
