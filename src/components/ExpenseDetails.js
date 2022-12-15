import './ExpenseDetails.css';

function ExpenseDetails(props) {
  return (
    <div>
      <h2 className="expense-item__description">{props.location}</h2>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
