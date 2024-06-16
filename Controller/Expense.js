import { db } from "../Database/DbConnection.js";

export const getExpenseList = async (request, response) => {
  try {
    const { rows } = await db.query(`SELECT * FROM expenses`);
    response.status(200).send({
        message: 'Expenses Fetched Successfully!',
        status: 1,
        data: rows
    });
  } catch (error) {
    response.status(422).send({
        message: 'Error Fetching Data !',
        data: [],
        status: 0
    })
  }
};

export const addExpense = async (request, response) => {
  try {
    const { name, amount, incoming } = request.body;
    const { rows } = await db.query(`INSERT INTO expenses (name, amount, incoming) VALUES ('${name}', ${amount}, ${incoming})`);
    response.status(200).send({
        message: 'Expenses Added Successfully!',
        status: 1,
        data: rows
    });
  } catch (error) {
    response.status(422).send({
        message: 'Error Adding Expense !',
        data: [],
        status: 0
    })
  }
};


export const getWalletBalance = async (request, response) => {
    try {
      const { rows } = await db.query(`SELECT * FROM get_expense_balances()`);
      response.status(200).send({
          message: 'Wallet Balance Fetched Successfully !',
          status: 1,
          data: rows[0]
      });
    } catch (error) {
      response.status(422).send({
          message: 'Error Fetching Wallet Balance !',
          data: [],
          status: 0
      })
    }
  };
  