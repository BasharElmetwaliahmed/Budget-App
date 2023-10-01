import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { logoutAction } from "./Components/NavBar";
import Layout,{loader as LayoutLoader} from "./Layouts/Layout";
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
    {
    path: "/",
    element:<Layout/>,
    loader:LayoutLoader,
    id:'layout-loader',
    children:[
      { 
        index:true,
        element:<Dashboard/>,
      }
    ]},
    {
      path:'logout',
      action:logoutAction
    }
      
  
]);

export default function App() {
  useEffect(()=>{
      localStorage.setItem('userName',JSON.stringify({name:'bashar elmetwali'}))

  },[])
  return (
  <RouterProvider router={router} />

  )
}