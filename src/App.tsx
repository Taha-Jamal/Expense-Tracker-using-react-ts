import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import Expense_tracker from "./Components/Expense_tracker";
import ExpenseFilter from "./Components/ExpenseFilter";

export const catagories = ['Gorocories', 'Utilities', 'Entertainment']

function App() {
  const [selectedCatagory, setCatagory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "rent", amount: 35, catagory: "Utilities" },
    { id: 2, description: "renta", amount: 35, catagory: "Utilities" },
    { id: 3, description: "rentb", amount: 35, catagory: "Utilities" },
  ]);

  const visibleExpenses = selectedCatagory
    ? expenses.filter((e) => e.catagory === selectedCatagory)
    : expenses;

  return (
    <div>
      <Expense_tracker />
      <ExpenseFilter onSelectCatagory={(catagory) => setCatagory(catagory)} />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
