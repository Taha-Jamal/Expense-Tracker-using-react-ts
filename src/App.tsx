import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import Expense_tracker from "./Components/Expense_tracker";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "rent", amount: 35, catagory: "ulti" },
    { id: 2, description: "renta", amount: 35, catagory: "ulti" },
    { id: 3, description: "rentb", amount: 35, catagory: "ulti" },
  ]);

  return (
    <div>
      <Expense_tracker />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
