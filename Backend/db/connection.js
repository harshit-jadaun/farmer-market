import pkg from 'pg';
const { Pool } = pkg;   


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'farmer',
    password: '123456',
    port: 5432,
});     


pool.connect().then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Error connecting to the database', err);
}); 


export default pool;