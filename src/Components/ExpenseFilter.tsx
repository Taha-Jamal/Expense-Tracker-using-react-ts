import React from "react";
import { catagories } from "../App";

interface Props {
  onSelectCatagory: (catagory: string) => void;
}
const ExpenseFilter = ({ onSelectCatagory }: Props) => {
  return (
    <select
      className="w-72 px-2 h-10 my-4 border-[3px] border-black"
      onChange={(event) => onSelectCatagory(event.target.value)}
    >
      <option value="">All catagories</option>
      {catagories.map((catagory) => (
        <option key={catagory} value={catagory}>
          {catagory}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
