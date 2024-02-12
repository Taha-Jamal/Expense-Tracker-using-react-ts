import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { catagories } from "../App";
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES } from "react";

interface Props {
  onSubmit: (data: z.infer<typeof schema>) => void;
}


const schema = z.object({
  description: z.string().min(3),
  amount: z.number({ invalid_type_error: "Age field is required" })
    .positive("Amount must be positive"),
  catagory: z.enum(catagories, {
    errorMap: () => ({ message: "Catagory is missing" }),
  }),
});

const Expense_tracker = ({ onSubmit }: Props) => {

  
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(data => {
        onSubmit(data)
        reset();
      })}
    >
      <div className="mb-3 flex flex-col">
        <label className="mx-2 font-bold" htmlFor="description">
          Descripiton
        </label>
        <input
          {...register("description")}
          className="border-2 border-black w-72 h-10 px-2"
          id="description"
          type="text"
        />
        {errors.description && (
          <p className="text-red-600">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3 flex flex-col">
        <label className="mx-2 font-bold" htmlFor="amount">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          className="border-2 border-black w-72 h-10 px-2"
          id="amount"
          type="number"
        />
        {errors.amount && (
          <p className="text-red-600">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3 flex flex-col">
        <label className="mx-2 font-bold" htmlFor="catagory">
          Catagory
        </label>
        <input
          {...register("catagory")}
          list="categories"
          className="border-2 border-black w-72 h-10 px-2"
          id="catagory"
        />
        {errors.catagory && (
          <p className="text-red-600">{errors.catagory.message}</p>
        )}
        <datalist id="categories">
          <option value=""></option>
          {catagories.map((catagory) => (
            <option key={catagory} value={catagory}>
              {catagory}
            </option>
          ))}
        </datalist>
        <button
          // disabled={!isValid}
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
