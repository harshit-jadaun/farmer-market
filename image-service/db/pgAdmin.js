import pkg from 'pg';
import dotenv, { configDotenv } from "dotenv";

const { Pool } = pkg;

configDotenv();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

async function verifyDb() {
    try {
        await pool.query("SELECT 1");
        console.log("database connected succesfully ! 👍");
    } catch (error) {
        console.error("database connection failed ");
        process.exit(1);
    }
}
verifyDb();

export default pool;