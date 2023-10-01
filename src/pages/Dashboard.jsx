import { useLoaderData, useRouteLoaderData } from "react-router-dom"
import AddBudgetForm from "../Components/AddBudgetForm"
import Intro from "../Layouts/Intro"

function Dashboard() {
    const {name}=useRouteLoaderData('layout-loader')

  return (
    <>
    {name?
    <div className="container">
    <h1 className="text-4xl font-extrabold mb-6 font-roboto px-4">Welcome Back, <span className="text-[#1dbbc3]">{name}</span></h1>
    <AddBudgetForm/>
    </div>
    :
    <Intro/>}
    </>
  )
}

export default Dashboard