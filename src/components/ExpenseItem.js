import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2021 ,11, 31);
    const expenseAmount = 100;
    const expenseDescription = 'Petrol';
    const expenseLocation = 'Mumbai';
  return (
    <div>
      <div className="expense-item">
        <div className="expense-itme__date">{expenseDate.toISOString()}</div>
        <h2 className="expense-item__description">{expenseLocation}</h2>
        <h2 className="expense-item__description">{expenseDescription}</h2>
        <div className="expense-item__price">Rs {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
