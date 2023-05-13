import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  const currentYear = new Date().getFullYear();
  const currentYear_1 = currentYear - 1;
  const currentYear_2 = currentYear - 2;
  const currentYear_3 = currentYear - 3;
  const currentYear_4 = currentYear - 4;
  const currentYear_5 = currentYear - 5;
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value={currentYear}>{currentYear}</option>
          <option value={currentYear_1}>{currentYear_1}</option>
          <option value={currentYear_2}>{currentYear_2}</option>
          <option value={currentYear_3}>{currentYear_3}</option>
          <option value={currentYear_4}>{currentYear_4}</option>
          <option value={currentYear_5}>{currentYear_5}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
