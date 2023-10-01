import { json, Outlet, useLoaderData } from "react-router-dom"
import NavBar from "../Components/NavBar"
import { getUser } from "../helper"
import WaveImage from '../assets/wave.svg'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export function loader(){
    const user=getUser('userName')
    if(user){
    return user}
    else return {name:null}
}
export async function loginAction({request}){
  const data=await request.formData();
  const userName=data.get('userName')
  try{
  localStorage.setItem('userName', JSON.stringify({name:userName}))
  return toast.success("Logged in success");
}
catch(err){
  throw json({message:'There Was Problem With Create New Acconut'},{status:404})
}

}
function Layout() {
    const {name}=useLoaderData()
  return (
    <div className="flex flex-col min-h-screen  font-inter">
        <div className="container">
        <NavBar user={name}/>
        </div>
                <Outlet/>
        <img src={WaveImage} className='mt-auto' />
    </div>
  )
}

export default Layout