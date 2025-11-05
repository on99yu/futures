import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Admin from "../pages/admin";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Kanji from "../pages/Kanji";
import ProtectedRoute from "./ProtectedRoute";
const router = createBrowserRouter([

    {path: "/login", element:<Login/>},
    {path: "/signup", element:<Signup/>},
    {
        path:"/",
        element:<ProtectedRoute/>,
        children:[
            {element:<MainLayout/>,
                children:[
                    {index: true, element:<Admin/>},
                    {path:"admin", element:<Admin/>},
                    {path:"admin/kanji", element:<Kanji/>}
                ]
            }
        ]
    }
])

export default function AppRouter(){
    return <RouterProvider router={router}/>;
}