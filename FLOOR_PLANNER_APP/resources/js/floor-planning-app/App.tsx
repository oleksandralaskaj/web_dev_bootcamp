import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./pages/Layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <p>home page</p>
            },
            {
                path: "/planner",
                element: <p>planner page</p>
            }
        ]
    },
]);

export const App =()=> {
    return <RouterProvider router={router}/>
}
