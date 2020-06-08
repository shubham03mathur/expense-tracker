import React from 'react';
import { DELETE_TRANSACTION } from '../store/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

const TransactionHistory = () => {
    const dispatch = useDispatch();
    let transactionHistory = (
        <li className="no-transactions">
            <span>No Transactions</span>
        </li>
    );

    const transactionData = useSelector(state => state.transactions.transactionHistory);
    if (transactionData.length > 0) {
        transactionHistory = transactionData.map(transaction => {
            let sign = '';
            let classes = '';
            if (+transaction.amount > 0) {
                sign = '+';
                classes = 'plus';
            } else{ 
                sign = '-';
                classes = 'minus';
            }
            return (
                <li key={transaction.id.toString()} className={classes}>
                    {transaction.text} 
                        <span>
                            {sign}&#x20B9; 
                            <span>
                                {Math.abs(+transaction.amount).toFixed(2)}
                            </span>
                    </span>
                    <button 
                    className="delete-btn" 
                    onClick={() => dispatch({
                        type: DELETE_TRANSACTION,
                        payload: { id: transaction._id }
                    })}>x</button>
                </li>
            );
        })
    }
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                { transactionHistory }
            </ul>
        </>
    )
}

export default TransactionHistory;
