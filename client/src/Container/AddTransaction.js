import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';
import axios from 'axios';

class AddTransaction extends Component {

    constructor(props) {
        super(props);
        this.ElRef = React.createRef();
    }

    handleStateChanges = (event) => {
        const stateObj = {
            id: event.target.id,
            type: this.ElRef.current.value,
            value: event.target.value
        };
        this.props.onSyncTransaction(stateObj);
    }

    saveDataToCloud = async (transaction) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const newTransaction = await axios.post('/api/v1/transactions', transaction, config);
            if (newTransaction.data.success) {
                this.props.onSetTransactions(newTransaction.data.data);
            } else {
                console.log(newTransaction.data.error);
            }
        } catch (err) {
            console.log(err);
        }
    }

    handleForm = (event) => {
        event.preventDefault();
        const newTransactions = {
            text: this.props.currentTransText,
            type: this.ElRef.current.value,
            amount: this.props.currentTransAmt
        }
        this.saveDataToCloud(newTransactions);
        this.ElRef.current.value = "";
    }

    render() {
        return (
            <React.Fragment>
                <h3>Add New Transaction</h3>
                <form id="form" onSubmit={this.handleForm}>
                    <div className="form-control">
                    <input 
                        type="text"
                        id="text"
                        placeholder="Enter Transaction Tag/Name..."
                        value={this.props.currentTransText}
                        required="required"
                        onChange={(event) => this.handleStateChanges(event)}/>
                    </div>
                    <div className="form-control select">
                        <select required="required" ref={this.ElRef} id="selectType">
                            <option value="">Please Select Transaction Type</option>
                            <option value="credit">Credit</option>
                            <option value="debit">Debit</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <input 
                            type="text"
                            id="amount"
                            placeholder="Enter amount..."
                            value={Math.abs(this.props.currentTransAmt)}
                            required="required"
                            onChange={(event) => this.handleStateChanges(event)}/>
                        </div>
                    <button className="btn">Add Transaction</button>
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentTransText : state.transactions.text,
        currentTransAmt : state.transactions.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetTransactions: (transaction) => dispatch({ type: actionTypes.ADD_TRANSACTION, payload: [transaction] }),
        onSyncTransaction: (currentTransaction) => dispatch({ 
            type: actionTypes.SYNC_CURRECT_TRANSACTION,
            payload: currentTransaction
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
