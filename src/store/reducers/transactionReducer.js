import * as actionTypes from '../actionTypes';

const initialState = {
    text: '',
    amount: '',
    totalBalance : 0,
    transactionHistory: []
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type) {
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
            const totalBalanceAmt = transactionHistoryObj.map(transaction => {
                return +transaction.amount
            }).reduce((sum, amt) => {
                return sum = sum + amt
            }, 0);

            return {
                ...state,
                text: "",
                amount: '',
                totalBalance : totalBalanceAmt,
                transactionHistory : transactionHistoryObj
            }
        default:
            return state;
    }
}

export default transactionReducer;
