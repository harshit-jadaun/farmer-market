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




