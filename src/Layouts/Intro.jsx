import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="flex justify-between my-auto align-middle container gap-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">
          Take Control of <br/><span className="text-[#1dbbc3]">Your Money</span>
        </h1>
        <p className=" font-medium text-2xl">
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>
        <Form method="post" className="flex flex-col gap-8">
          <input
            type="text"
            name="userName"
            required
            className="bg-[hsl(190,60%,98%)] border-[3px] border-black w-80 text-xl placeholder:text-xl
             outline-none translate-all duration-300
             focus:border-[#1dbbc3] rounded-sm py-2 px-2"
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <button type="submit" className="flex bg-black w-fit text-white py-3 px-6 flex-row-reverse gap-4 font-inter rounded-sm">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro