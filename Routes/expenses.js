import express from 'express'
import { addExpense, getExpenseList, getWalletBalance } from '../Controller/Expense.js';

export const ExpenseRoutes = express.Router()

ExpenseRoutes.get('/expenses', getExpenseList);

ExpenseRoutes.post('/expense', addExpense);

ExpenseRoutes.get('/wallet_balance', getWalletBalance);
