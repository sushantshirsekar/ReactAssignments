import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <div className="expense-itme__date">{props.date.toISOString()}</div>
        <h2 className="expense-item__description">{props.location}</h2>
        <h2 className="expense-item__description">{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
