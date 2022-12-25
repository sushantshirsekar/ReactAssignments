import React, { useState } from "react";


import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";





const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear);
    console.log('in Expenses');
  }
  const filtered = props.items.filter((expenses)=>{
    return expenses.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div id="parentNode">
      <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      
        {filtered.map((expense)=>{
            return (
            <ExpenseItem 
            key ={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            );
        })}
        </div>
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      
      {/* <Card className="expenses">
        {props.items.map((ele) => {
          <ExpenseItem
            id={ele.id}
            key={ele.id}
            title={ele.title}
            date={ele.date}
            amount={ele.amount}
          />;
        })}
      </Card> */}
    </div>
  );
};

export default Expenses;
