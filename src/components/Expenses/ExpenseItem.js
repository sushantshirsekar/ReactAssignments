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
    
      <Card className="expense-item" >
        
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
          </div>
          {/* <button className="expense-item__price" onClick={amountClick}>$</button> */}
          <div className="expense-item__price">$ {props.amount}</div>
          {/* <button className="expense-item__edit" onClick={editClick}>
            Edit
          </button>
          <button
            className="expense-item__delete"
            onClick={() => {
              const parentNode = document.getElementById("parentNode");
              const childNode = document.getElementById(props.id);
              console.log(parentNode);
              console.log(childNode);
              parentNode.removeChild(childNode);
            }}
          >
            Delete
          </button>
         */}
      </Card>
      
   
  );
}

export default ExpenseItem;
