import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {UserContextProvider} from "./contexts/UserContext";
import {Layout} from "./pages/Layout";
import {Register} from "./pages/Register";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/planner",
                element: <p>planner page</p>
            }
        ]
    },
]);

export const App = () => {
    return <UserContextProvider>
        <RouterProvider router={router}/>
    </UserContextProvider>
}
