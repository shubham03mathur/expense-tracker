import React from 'react'
import { useSelector } from "react-redux";

const Balance = () => {
    const totalBalance = useSelector(state => state.transactions.totalBalance);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>&#x20B9; <span>{ totalBalance }</span></h1>
        </>
    )
}

export default Balance;
