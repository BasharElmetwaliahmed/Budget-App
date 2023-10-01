import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { logoutAction } from "./Components/NavBar";
import Layout,{loader as LayoutLoader, loginAction} from "./Layouts/Layout";
import Dashboard from "./pages/Dashboard";
  import { ToastContainer } from 'react-toastify';
import Error from "./Components/Error";

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
        action:loginAction,
        errorElement:<Error/>,
 
      }
    ]},
    {
      path:'logout',
      action:logoutAction
    }
      
  
]);

export default function App() {

  return (
   <>
     <RouterProvider router={router} />
  <ToastContainer/>
  </>

  )
}