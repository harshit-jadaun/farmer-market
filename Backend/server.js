import express, { response } from "express";
import pool from "./db/connection.js";
import router from "./routes/auth.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("server is working fine !");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
