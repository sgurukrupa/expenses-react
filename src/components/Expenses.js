import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((v) => (
        <ExpenseItem date={v.date} title={v.title} amount={v.amount} />
      ))}
    </div>
  );
}

export default Expenses;
