import "./components/Expenses/Expenses.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const data = [
    {
      id: 1,
      title: "Car Insurance",
      location: "PhonePe",
      date: new Date(2021, 11, 30),
      amount: 900,
    },
    {
      id: 2,
      title: "Movie",
      location: "PVR",
      date: new Date(2021, 8, 30),
      amount: 500,
    },
    {
      id: 3,
      title: "Dinner",
      location: "Barbeque",
      date: new Date(2021, 0, 12),
      amount: 1000,
    },
    {
      id: 4,
      title: "Lunch",
      location: "The Great Punjab",
      date: new Date(2021, 3, 28),
      amount: 700,
    },
  ];
  return (
    <div>
      <h2>Expense Items!</h2>
      <Card className="expenses" >
      {data.map((ele) => {
        return (
          <ExpenseItem id={ele.id}
            key={ele.id}
            title={ele.title}
            location={ele.location}
            date={ele.date}
            amount={ele.amount}
          />
        );
      })}
      
      </Card>
    </div>
  );
}

export default App;
