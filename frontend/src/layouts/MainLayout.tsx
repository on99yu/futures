import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
export default function MainLayout(){
    return (
        <div>
            <NavBar/>
            <main className="flex-1 overflow-x-auto p-4">
                <Outlet/>
            </main>
        </div>
    )
}