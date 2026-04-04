import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../dashboard/UserDashboard";
import PrivateRouting from "../privaterouting/PrivateRouting";
import DashboardHome from "../dashboard/dashboardpages/DashboardHome";
import Profile from "../dashboard/dashboardpages/Profile";
import UpdateProfile from "../dashboard/dashboardpages/UpdateProfile";
import UpdateStatus from "../privaterouting/UpdateStatus";
import AddNotes from "../dashboard/dashboardpages/AddNotes";
import AllNotes from "../dashboard/dashboardpages/AllNotes";
import UpdateNotes from "../dashboard/dashboardpages/UpdateNotes";


export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<UpdateStatus>
                    <Home/>
                    </UpdateStatus>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/help",
                element:<Help/>
            },
            {
                path:"/dashboard",
                element:<PrivateRouting>
                    <UserDashboard/>
                </PrivateRouting>,
                children:[
                    {
                        path:"/dashboard",
                        element:<DashboardHome/>
                    },
                    {
                        path:"/dashboard/profile/:userId",
                        element:<Profile/>
                    },
                    {
                        path:"/dashboard/updateprofile/:userId",
                        element:<UpdateProfile/>
                    },
                    {
                        path:"/dashboard/addnotes/:userId",
                        element:<AddNotes/>
                    },
                    {
                        path:"/dashboard/allnotes/:userId",
                        element:<AllNotes/>
                    },
                    {
                        path:"/dashboard/updatenote/:userId/:notesId",
                        element:<UpdateNotes/>
                    }
                ]
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])