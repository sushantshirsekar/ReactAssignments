import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div id="parentNode">
      
        {props.items.map((expense)=>{
            return (
            <ExpenseItem 
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            );
        })}
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
