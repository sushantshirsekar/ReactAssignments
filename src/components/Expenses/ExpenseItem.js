import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.location}</h2>
          <h2>{props.title}</h2>
          
        </div>
        <div className="expense-item__price">Rs {props.amount}</div>
      </Card>
    </div>
  );
}


export default ExpenseItem;
