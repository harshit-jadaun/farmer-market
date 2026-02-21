<<<<<<< HEAD
import db from "../db/connection.js";

export const createUser = async (name, email, password) => {
    try {
        const result = await db.query(  
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        return result.rows[0];
    } catch (err) {
        console.error('Error creating user', err);
        throw err;
    }       
};




=======
import pool from "../db/connection.js";


// CREATE USER
export const createUser = async (name, password,mobile_no,otp,role) => {

  const query = `
    INSERT INTO users (name,password,mobile_no,otp,role)
    VALUES ($1, $2, $3,$4,$5)
    RETURNING *;
  `;

  const values = [name,password,mobile_no,otp,role];

  const result = await pool.query(query, values);

  return result.rows[0];
};


>>>>>>> c82e37f7e3fddde3c29445d0769e2e4cb9f27ceb
