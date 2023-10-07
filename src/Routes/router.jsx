import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"/signup",
        element:<SignUp/>,
    },
    {
        path:"/login",
        element:<Login/>,
    },

])