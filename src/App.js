import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/incomeExpense';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';

function App() {
  return (
    <div>
        <Header />
        <div className="container">
            <Balance />
            <IncomeExpense />
            <TransactionHistory />
            <AddTransaction />
        </div>
    </div>
  );
}

export default App;
