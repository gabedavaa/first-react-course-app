import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [expense, setExpense] = useState("");

  const currentDate = new Date().toISOString().split("T")[0];
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 3);
  const minDateISO = minDate.toISOString().split("T")[0];

  const titleChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text">
            {expense}
          </input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min={minDateISO} max={currentDate}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
