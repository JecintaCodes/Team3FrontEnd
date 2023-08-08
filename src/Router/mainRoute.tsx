import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";


export const mainRoute = createBrowserRouter([
    {
        path:"/register",
        element:<Register/>,
    },
    {
        path:"/sign-in",
        element:<SignIn/>,
    },
   
])