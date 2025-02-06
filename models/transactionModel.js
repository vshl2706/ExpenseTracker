const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,  // Referencing the User model's _id
        ref: "users",  // Reference the users collection
        required: true  // Ensure a user ID is always provided
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    type: {
        type: String,
        required: [true, 'Type is required']
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    }
}, { timestamps: true });

const transactionModel = mongoose.model('transaction', transactionSchema);
module.exports = transactionModel;
