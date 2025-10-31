import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/login";
import Signup from "../pages/Signup";
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {index:true, element:<Home/>},
            {path:"login", element:<Login/>},
            {path:"signup", element:<Signup/>}
        ]
    }
])

export default function AppRouter(){
    return <RouterProvider router={router}/>;
}