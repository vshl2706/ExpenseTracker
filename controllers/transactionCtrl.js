const transactionModel = require("../models/transactionModel");
const moment = require("moment");
const  getAllTransaction = async (req, res) => {
    try {
        const {frequency, selectDate, type} = req.body;
        // console.log("Request Body : ", req.body);
        
        const transaction = await transactionModel.find({
            ...(frequency !== 'custom'
            ? {
                date:{
                    $gt : moment().subtract(Number(frequency), "d").toDate(),
                },
            } : {
                date:{
                    $gte: selectDate[0],
                    $lte : selectDate[1]
                }
            }),
            userid :req.body.userid,
            ...(type !== 'all' && {type}),
        });
        console.log("Fetched Transactions", transaction);
        res.status(200).json(transaction);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const deleteTransaction = async(req, res) => {
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionId});
        res.status(200).send('Tramsaction Deleted')
    } catch (error) {
        console.log()
        res.status(500).json(error);
    }
};
const editTransaction = async(req, res) => {
    try{
        await transactionModel.findOneAndUpdate(
            {_id: req.body.transactionId},
            req.body.payload
        );
        res.status(200).send("Edit Successfully");
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}

const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send("Transaction Created");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {getAllTransaction, addTransaction, editTransaction, deleteTransaction};