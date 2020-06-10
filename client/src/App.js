import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Layout from './Components/UI/Layout/Layout';
import Balance from './Components/Balance';
import Login from './Container/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import IncomeExpense from './Components/incomeExpense';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Container/AddTransaction';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  const toBeRenderComps = (
      <Layout>
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </Layout>
  );

  return (
      <ErrorBoundary>
        {/* <Layout> */}
          <Switch>
            <Route path="/" exact  component={Login}/>
            <Route path="/transactions" exact  component={toBeRenderComps}/>
            <Route component={NotFound}/>
          </Switch>
        {/* </Layout> */}
      </ErrorBoundary>
  );
}

export default App;
