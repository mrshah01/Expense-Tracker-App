//const { createContext } = require("react")
import React, {createContext,useReducer} from 'react';
import TransactionReducer from './transactionReducer';

const initialtransactions=[
    {id:1,amoount:500,desc:"Cash"},
    {id:2,amoount:-50,desc:"Colddrink"},
    {id:3,amoount:100,desc:"Deposit"},
    {id:4,amoount:-200,desc:"Utility Bill"}
]

export const TransactionContext=createContext(initialtransactions);


export const TransactionProvider=({children})=>{

    let  [state, dispatch] = useReducer(TransactionReducer, initialtransactions);

    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }

    function addTransaction(transObj){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                id:transObj.id,
                amoount:transObj.amoount,
                desc:transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}