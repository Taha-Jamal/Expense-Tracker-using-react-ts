import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  catagory: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
    if(expenses.length === 0) return null

  return (
    <table className="border-2 border-collapse">
      <thead className="border-2 h-10">
        <tr>
          <th>Descripition</th>
          <th>Amount</th>
          <th>Catagory</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="border-2 h-10">
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.catagory}</td>
            <td>
              <button
                onClick={() => onDelete(expense.id)}
                className="border-2 border-red-600 rounded-xl text-red-600 w-20 hover:text-black hover:border-black hover:bg-red-600 "
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="border-2 h-10">
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
