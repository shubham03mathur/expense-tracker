import { createStore, combineReducers } from 'redux';
import transactionReducer from './reducers/transactionReducer';

const appReducer = combineReducers({ 
    "transactions" : transactionReducer 
});

const store = createStore(appReducer);

export default store;
