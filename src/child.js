import React, { useContext, useState } from "react";
import { TransactionContext } from "./transactionContext";
import "./App.css";

export default function Child() {
  let { transactions, addTransaction, deleteTransaction } = useContext(
    TransactionContext
  );
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert("Please Enter correct value");
      return false;
    }
    addTransaction({
        id:Math.floor(Math.random()*100000000),
      amoount: Number(newAmount),
      desc: newDesc,
    });
    setDesc("");
    setAmount(0);
  };
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amoount > 0) income += transactions[i].amoount;
    }

    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amoount < 0) expense += transactions[i].amoount;
    }

    return expense;
  };
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <h3>
        Your Balance <br /> ${getIncome() + getExpense()}
      </h3>

      <div className="expense-container">
        <h3>
          INCOME <br /> {"$" + getIncome()}
        </h3>
        <h3>
          EXPENSE <br /> {"$" + getExpense()}
        </h3>
      </div>

      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transObj, ind) => {
          return (
            <>
              <li key={ind}>
                {/* <span>{transObj.id}</span> */}
                <button
                  className="del-btn"
                  onClick={() => deleteTransaction(transObj.id)}
                >
                  x
                </button>
                <span>{transObj.desc}</span>
                <span>${transObj.amoount}</span>
                
              </li>
            </>
          );
        })}
      </ul>
      <h3>Add new transaction</h3>
      <hr />
      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description
          <br />
          <input
            type="text"
            value={newDesc}
            placeholder="Description"
            onChange={(ev) => setDesc(ev.target.value)}
            required
            name=""
            id=""
          />
        </label>
        <br />
        <label>
          Enter Amount
          <br />
          <input
            type="number"
            value={newAmount}
            placeholder="Amount"
            onChange={(ev) => setAmount(ev.target.value)}
            required
            name=""
            id=""
          />
          <br />
        </label>
        <input type="submit" value="Add Transaction" name="" id="" />
      </form>
    </div>
  );
}
