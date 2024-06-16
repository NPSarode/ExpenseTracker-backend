import pkg from "pg";
import dotenv from 'dotenv';

dotenv.config()

export const db = new pkg.Pool({
    connectionString: process.env.DATABASE_URI || 'postgresql://postgres:Nikhil@123@localhost:5432/expense_tracker'
})
