/**
 * @description GET all transactions
 * @route GET /api/v1/transactions
 * @access Public
 */
exports.getTransactions = (req, res, next) => {
    res.send('All Transactions')
}

/**
 * @description POST transaction
 * @route POST /api/v1/transactions
 * @access Public
 */
exports.postTransactions = (req, res, next) => {
    res.send('POST Transactions')
}

/**
 * @description DELETE transaction
 * @route DELETE /api/v1/transactions/:id
 * @access Public
 */
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE Transactions')
}
