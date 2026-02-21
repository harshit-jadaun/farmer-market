import express from "express";
import bodyParser from "body-parser";
import dotenv, { config, configDotenv } from "dotenv";
import pool from "./db/connection.js";
import router from "./routes/auth.route.js";

configDotenv();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("server is working fine !");
});

pool.connect();

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} ..`);
});
