import { useLoaderData, useRouteLoaderData } from "react-router-dom"

function Dashboard() {
    const {name}=useRouteLoaderData('layout-loader')

  return (
    <h1>hello{name?name:''}</h1>
  )
}

export default Dashboard