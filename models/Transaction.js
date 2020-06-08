const mongoose = require('mongoose');

const Transaction = new mongoose.Schema({
    text: {
        type : String,
        required: [true, 'Please provide TAG/Name for a Expense'],
        trim: true
    },
    type: {
        type: String,
        required: [true, "Please select transaction type"],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, "Please Enter the Amount"]
    },
    user: {
        type: Object,
        required: false,
        default: null
    },
    createdAt: {
        type : Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Transaction', Transaction);
