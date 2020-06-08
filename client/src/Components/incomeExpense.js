import React from 'react'
import { useSelector } from 'react-redux';

const IncomeExpense = () => {
    const totalTransactions = useSelector(state => state.transactions.transactionHistory);
    let totalIncome = 0.00;
    let totalExpenses = 0.00;
    if (totalTransactions.length > 0) {
        const totalAmtArr = totalTransactions.map(transaction => +transaction.amount);
        totalAmtArr.forEach(amt => {
            if (amt > 0 ) {
                totalIncome += amt;
            } else {
                totalExpenses += amt;
            }
        });
    }

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+&#x20B9;<span id="incomeAmount">{+totalIncome.toFixed(2)}</span></p>
                </div>
                <div>
                <h4>Expense</h4>
                <p className="money minus">
                    -&#x20B9;
                    <span 
                        id="expenseAmount">{Math.abs(+totalExpenses.toFixed(2))}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default IncomeExpense;
