import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { catagories } from "../App";

const Expense_tracker = () => {
  const schema = z.object({
    descripiton: z.string().min(3),
    amount: z
      .number({ invalid_type_error: "Age field is required" })
      .positive("Amount must be positive"),
    catagory: z.enum(["Grocories", "Utilities", "Entertainment"]).optional(),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 flex flex-col">
        <label className="mx-2 font-bold" htmlFor="descripiton">
          Descripiton
        </label>
        <input
          {...register("descripiton")}
          className="border-2 border-black w-72 h-10 px-2"
          id="descripiton"
          type="text"
        />
        {errors.descripiton && <p className="text-red-600">{errors.descripiton.message}</p>}
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
        </option>)
        )}
        </datalist>
        <button
          disabled={!isValid}
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
