import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Expense_tracker = () => {

    const schema = z.object({
        Desc: z.string(),
        Amount: z.number().positive("Amount must be positive"),
        catagory: z.enum(["Food", "Transportation","Others"]),
    })

  return (
    <form action="">
      <div className="mb-3 flex flex-col">
        <label className="mx-2 font-bold" htmlFor="Desc">
          Descripiton
        </label>
        <input
          className="border-2 border-black w-72 h-10 px-2"
          id="Desc"
          type="text"
        />
      </div>
      <div className="mb-3 flex flex-col">
        <label className="mx-2 font-bold" htmlFor="amount">
          Amount
        </label>
        <input
          className="border-2 border-black w-72 h-10 px-2"
          id="amount"
          type="number"
        />
      </div>
      <div className="mb-3 flex flex-col">
        <label className="mx-2 font-bold" htmlFor="catagory">
          Catagory
        </label>
        <input className="border-2 border-black w-72 h-10 px-2" id="catagory" />
        <datalist id="catagory">
          <option value="grocories">grocories</option>
          <option value="utilites">utilities</option>
          <option value="entertainment">Entertainment</option>
        </datalist>
        <button
          className="mt-3 h-10 w-20 mx-2 text-white rounded-lg bg-blue-500"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Expense_tracker;
