import { Form, NavLink, redirect } from "react-router-dom"
import logo from '../assets/logomark.svg'
import { TrashIcon } from '@heroicons/react/24/solid'
import { deleteUser } from "../helper"
export const logoutAction=()=>{
    deleteUser('userName')

    return redirect('/')

}

function NavBar({user}) {

    const logoutHandler=(e)=>{
        if(!window.confirm('are you sure to delete this user?'))
        e.preventDefault()
    }
  return (
    <div className="my-9 flex justify-between">
        <NavLink to='/' className='flex text-2xl items-center gap-2 font-bold font-inter uppercase
         transition-all duration-300 py-2 px-4
          hover:border-[#1dbbc3] border-transparent border-2 rounded-md'>
            <img src={logo} className='items-center' alt="logo"/>Budget App</NavLink>
           {
            user &&
            <Form method="post" action="/logout" >
                <button onClick={logoutHandler} className="flex items-center flex-row-reverse
                 gap-4 px-6 py-2 text-red-700 bg-red-100 bg-opacity-40 border-red-700 font-semibold rounded-sm border-[2px]">
                    <TrashIcon className="w-4 text-red-700 "></TrashIcon> Delete User</button>

            </Form>
           } 
    </div>
  )
}

export default NavBar