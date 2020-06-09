import React, { useEffect } from 'react';
import { DELETE_TRANSACTION, ADD_TRANSACTION } from '../store/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const deleteDataFromCloud = async (dispatch, id) => {
    try {
        const transaction = await axios.delete(`/api/v1/transactions/${id}`);
        if (transaction.data.success) {
            dispatch({
                type: DELETE_TRANSACTION,
                payload: { id }
            })
        } else {
            console.log(transaction.data.error);
        }
    } catch (err) {
        console.log(err);
    }
}

const TransactionHistory = () => {
    const dispatch = useDispatch();
    const transactionData = useSelector(state => state.transactions.transactionHistory);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const transactions = await axios.get('/api/v1/transactions');
                if (transactions.data.success) {
                    dispatch({
                        type: ADD_TRANSACTION,
                        payload: transactions.data.data
                    });
                } else {
                    console.log(transactions.data.error);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    let transactionHistory = (
        <li className="no-transactions">
            <span>No Transactions</span>
        </li>
    );

    if (transactionData.length > 0) {
        transactionHistory = transactionData.map(transaction => {
            let sign = '';
            let classes = '';
            if (+transaction.amount > 0) {
                sign = '+';
                classes = 'plus';
            } else { 
                sign = '-';
                classes = 'minus';
            }
            return (
                <li key={transaction._id} className={classes}>
                    {transaction.text} 
                        <span>
                            {sign}&#x20B9; 
                            <span>
                                {Math.abs(+transaction.amount).toFixed(2)}
                            </span>
                    </span>
                    <button 
                    className="delete-btn" 
                    onClick={() => deleteDataFromCloud(dispatch, transaction._id)}>x</button>
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
