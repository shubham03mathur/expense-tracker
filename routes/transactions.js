const express = require('express');
const router = express.Router();
const { 
    getTransactions,
    postTransactions,
    deleteTransaction 
} = require('../controllers/transactionController');

router.get('/', getTransactions);

router.post('/', postTransactions);

router.delete('/:id', deleteTransaction);

module.exports = router;
