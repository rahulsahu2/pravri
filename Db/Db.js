import mysql from 'mysql2';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({path:__dirname+'.env'});
 
export const conn1 = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    connectionLimit:10
})


