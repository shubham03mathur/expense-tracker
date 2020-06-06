import React from 'react'

const IncomeExpense = () => {
    return (
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p className="money plus">+&#x20B9; <span id="incomeAmount">0.00</span></p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">-&#x20B9; <span id="expenseAmount">0.00</span></p>
            </div>
        </div>
    )
}

export default IncomeExpense;
