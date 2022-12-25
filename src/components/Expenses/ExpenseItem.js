import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  // const amountClick = () => {
  //   setAmount(100);
  //   console.log(amount);
  // }

  // const editClick = () => {
  //   setTitle("Updated!!");
  //   console.log(title);
  // };

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">$ {props.amount}</div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
