import * as actionTypes from '../actionTypes';

const initialState = {
    text: '',
    amount: '',
    totalBalance : 0,
    transactionHistory: [],
    isLoading: false,
    error: null
}

const calculateTotalBalance = (transactionHistory) => {
    return transactionHistory.map(transaction => {
        return +transaction.amount;
    }).reduce((sum, amt) => {
        return sum = sum + amt;
    }, 0).toFixed(2);
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.DELETE_TRANSACTION :
            const transactionId = action.payload.id;
            const updatedTransactions = state.transactionHistory.filter(transaction => {
                return transaction._id !== transactionId
            });
            const totalAmt = calculateTotalBalance(updatedTransactions);
            return {
                ...state,
                totalBalance : totalAmt,
                transactionHistory : updatedTransactions
            }

        case actionTypes.SYNC_CURRECT_TRANSACTION :
            let value = action.payload.value;
            if (
                action.payload.type === 'debit' &&
                action.payload.id === 'amount'
            ) {
                value = -action.payload.value;
            }
            return {
                ...state,
                [action.payload.id]: value
            }

        case actionTypes.ADD_TRANSACTION :
            const newId = Math.random();
            const transactionHistoryObj = [
                ...state.transactionHistory,
                { id: newId, text: state.text, amount: state.amount }
            ]
            const totalBalanceAmt = calculateTotalBalance(transactionHistoryObj);
            return {
                ...state,
                text: "",
                amount: '',
                totalBalance : totalBalanceAmt,
                transactionHistory : transactionHistoryObj
            }

        case actionTypes.START_TRANSACTION :
            return {
                ...state,
                isLoading: true
            }

        default:
            return state;
    }
}

export default transactionReducer;
