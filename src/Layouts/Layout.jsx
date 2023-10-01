import { Outlet, useLoaderData } from "react-router-dom"
import NavBar from "../Components/NavBar"
import { getUser } from "../helper"
import WaveImage from '../assets/wave.svg'


export function loader(){
    const user=getUser('userName')
    if(user){
    return user}
    else return {name:null}
}
function Layout() {
    const {name}=useLoaderData()
  return (
    <div className="flex flex-col min-h-screen ">
        <div className="container">
        <NavBar user={name}/>
        <Outlet/>
        </div>
        <img src={WaveImage} className='mt-auto' />
    </div>
  )
}

export default Layout