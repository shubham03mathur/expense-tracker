import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/incomeExpense';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Container/AddTransaction';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div>
        <ErrorBoundary>
          <Header />
          <div className="container">
              <Balance />
              <IncomeExpense />
              <TransactionHistory />
              <AddTransaction />
          </div>
        </ErrorBoundary>
    </div>
  );
}

export default App;
