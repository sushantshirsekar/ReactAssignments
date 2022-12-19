import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <div id={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.location}</h2>
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs {props.amount}</div>
        <button className="expense-item__price"
          onClick={()=> {
            const parentNode = document.getElementById('parentNode');
            const childNode = document.getElementById(props.id);
            console.log(parentNode);
            console.log(childNode);
            parentNode.removeChild(childNode);
          }}
        >
          Delete
        </button>
      </Card>
    </div>
  );
}

export default ExpenseItem;
