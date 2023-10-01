import { Form } from "react-router-dom"

// library imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"

const AddBudgetForm = () => {
  return (
    <div className="w-[600px] py-3 px-3 shadow-xl rounded-xl ">
      <div className=" border-2  border-black border-dashed rounded-lg py-4 px-6">
             <h2 className="text-2xl font-bold">
        Create budget
      </h2>
      <Form
        method="post"
        className="flex flex-col gap-7 mt-6 w-full  "
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="newBudget" className="font-semibold">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            className="border-2 border-black px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newBudgetAmount" className="font-semibold">Amount</label>
          <input
            type="number"
            step="1"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            className="border-2 border-black  px-2 py-2"
          />
        </div>
        <button type="submit" className="flex bg-black w-fit text-white py-3 px-6 flex-row-reverse gap-4 font-inter rounded-md">
          <span>Create budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </Form> 

      </div>

    </div>
  )
}
export default AddBudgetForm