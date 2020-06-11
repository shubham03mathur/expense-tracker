import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from './Components/UI/Loader/Loader';
import Layout from './Components/UI/Layout/Layout';
import Login from './Container/Login/Login';
import Home from './Container/Home/Home';
import AuthCallback from './Container/AuthCallback';
import NotFound from './Components/NotFound/NotFound';
import { useAuth0 } from "./react-auth0-spa";
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  let routes;
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/home" exact  component={Home}/>
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact  component={Login}/>
        <Route path="/auth0_callback" exact component={AuthCallback}/>
        <Redirect to="/" />
      </Switch>
    );
  }

  return <ErrorBoundary>{ routes }</ErrorBoundary>;
}

export default App;
