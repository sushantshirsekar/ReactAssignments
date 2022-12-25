import "./components/Expenses/Expenses.css";
// import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import React, { useState } from "react";

function App() {
  const DummyExpenses = [
    {
      id: 1,
      title: "Car Insurance",
      date: new Date(2021, 11, 30),
      amount: 900,
    },
    {
      id: 2,
      title: "Movie",
      date: new Date(2021, 8, 30),
      amount: 500,
    },
    {
      id: 3,
      title: "Dinner",
      date: new Date(2021, 0, 12),
      amount: 1000,
    },
    {
      id: 4,
      title: "Lunch",
      date: new Date(2021, 3, 28),
      amount: 700,
    },
  ];
  const [enteredData, setEnteredData] = useState(DummyExpenses);
    const addExpense =(expense)=>{
    setEnteredData((previousExpense)=>{
      return [expense, ...previousExpense]
    })
    console.log(enteredData);
  }
  return (
    <div className="bg">
      <NewExpense onExpenseAdd={addExpense} />
      
      <Expenses items = {enteredData} />
      
    </div>
  );
}

export default App;
