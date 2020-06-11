import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth.config.json";
import history from "./utils/history";

const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
};

const app = (
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        cacheLocation = { 'localstorage' }
        redirect_uri={`${window.location.origin}/auth0_callback`}
        onRedirectCallback={onRedirectCallback}
    >
        <Provider store={store}>
            <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
            </BrowserRouter>
        </Provider>
    </Auth0Provider>
);

ReactDOM.render(app, document.getElementById('root'));
