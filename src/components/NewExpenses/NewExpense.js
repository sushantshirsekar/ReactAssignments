import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const [isExpenseForm, setIsExpenseForm]=useState(false);
  const addExpenseData = (newExpense) =>{
    // console.log(newExpense);
    props.onExpenseAdd(newExpense);
    setIsExpenseForm(false);
  }
  
  const addMoreExpense = ()=> {
    setIsExpenseForm(true);
  }
  const cancelFunction = () =>{
    setIsExpenseForm(false);
  }
  return (
    <div className="new-expense">
      {!isExpenseForm &&<button onClick={addMoreExpense}>Add More Expense</button>}
      {isExpenseForm && <ExpenseForm onExpenseFormHandler={addExpenseData} onCancel = {cancelFunction}/>}
    </div>
  );
};

export default NewExpense;
