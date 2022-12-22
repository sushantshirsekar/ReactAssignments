import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const addExpenseData = (newExpense) =>{
    // console.log(newExpense);
    props.onExpenseAdd(newExpense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormHandler={addExpenseData} />
    </div>
  );
};

export default NewExpense;
