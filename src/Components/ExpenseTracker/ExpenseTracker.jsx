import React from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import ExpenseTrackerTransaction from "./ExpenseTrackerTransaction";

export default function ExpenseTracker() {
  return (
    <>
      <div className="container">
        <h3 className="title">Log Your Expense</h3>
        <ExpenseTrackerForm />
        <br />
        <div className="class">Transation List</div>
        <ExpenseTrackerTransaction />
      </div>
    </>
  );
}
