import React, { Component } from 'react';

class AddTransaction extends Component {
    state = {
        transaction: {
            text: '',
            amount: 0
        }
    }

    handleStateChanges = (event) => {
        const stateObj = { ...this.state.transaction };
        stateObj[event.target.id] = event.target.value;
        this.setState({ transaction : stateObj });
    }

    render() {
        let { transaction } = this.state;
        return (
            <React.Fragment>
                <h3>Add new transaction</h3>
                <form id="form">
                    <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        id="text" 
                        placeholder="Enter text..." 
                        value={transaction.text} 
                        onChange={(event) => this.handleStateChanges(event)}/>
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input 
                        type="number" 
                        id="amount" 
                        placeholder="Enter amount..." 
                        value={transaction.amount}
                        onChange={(event) => this.handleStateChanges(event)}/>
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddTransaction;
