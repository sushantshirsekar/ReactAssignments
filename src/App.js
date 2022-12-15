import ExpenseItem from "./components/ExpenseItem";

function App() {
  let data = [
    {
      id: 1,
      title: "Car Insurance",
      location: "PhonePe",
      date: new Date(2021, 11, 30),
      amount:100
    },
    {
      id: 2,
      title: "Movie",
      location: "PVR",
      date: new Date(2021, 8, 30),
      amount:500
    },
    {
      id: 3,
      title: "Dinner",
      location: "Barbeque",
      date: new Date(2021, 0, 12),
      amount:1000
    },
    {
      id: 4,
      title: "Lunch",
      location: "The Great Punjab",
      date: new Date(2021, 3, 28),
      amount:700
    },
  ];
  return (
    <div>
      <h2>Expense Items!</h2>
      {data.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            location={ele.location}
            date={ele.date}
            amount={ele.amount}
          />
        );
      })}
    </div>
  );
}

export default App;
