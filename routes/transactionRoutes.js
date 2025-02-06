const express = require("express");
const { getAllTransaction, addTransaction, editTransaction, deleteTransaction} = require("../controllers/transactionCtrl");

// router object
const router = express.Router();

// routes
// Add transaction POST method 
router.post('/add-transaction', addTransaction);

// Edit transaction POST Method
router.post("/edit-transaction", editTransaction);

// Delete Transaction
router.post("/delete-transaction", deleteTransaction);
// get transaction
// When we are passing it through id we use post
router.post('/get-transaction', getAllTransaction);

module.exports = router;