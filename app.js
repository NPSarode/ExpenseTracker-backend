import { config } from 'dotenv'
import express from 'express'
import { ExpenseRoutes } from './Routes/expenses.js'
import cors from 'cors'
import morgan from 'morgan'

config(
    {
        path: './.env'
    }
)

export const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type,Authorization',
    origin: process.env.FRONT_END_URI,
    credentials: true
}))

app.use(ExpenseRoutes)