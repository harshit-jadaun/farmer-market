import express from "express";
import router from "./routes/auth.route.js";
import "./db/pgAdmin.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use("/auth", router);

app.listen(process.env.PORT, () => {
  console.log("Auth Service running");
});
