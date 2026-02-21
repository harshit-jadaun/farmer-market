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


