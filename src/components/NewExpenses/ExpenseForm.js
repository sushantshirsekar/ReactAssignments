import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEneteredTitle] = useState('');
    const [enteredAmount, setEneteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');



    const titleHandler = (event) => {
        setEneteredTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setEneteredAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitClick = (e) => {
        e.preventDefault();
        const titleInput = e.target.title.value;
        const amountInput = e.target.amnt.value;
        const dateInput = e.target.date.value;

        const dataObj = {
            titleInput,
            amountInput,
            dateInput
        }
        console.log(dataObj);
    }
  return(
    <form onSubmit={submitClick}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title:</label>
        <input type="text" name="title" onChange={titleHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Amount:</label>
        <input type="number" min="0.01" step="0.01" name="amnt" onChange={amountHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date:</label>
        <input type="date" min="2019-01-01" max="2022-12-31" name="date" onChange={dateHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
  </form>
  );
};


export default ExpenseForm;
