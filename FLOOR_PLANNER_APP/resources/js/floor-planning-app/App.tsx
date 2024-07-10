import React, {FC, PropsWithChildren} from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {UserContextProvider, useUserContext} from "./contexts/UserContext";
import {Layout} from "./pages/Layout";
import {Register} from "./pages/Register";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";

const RequireAuth: FC<PropsWithChildren> = ({children}: { children }) => {
    const {isLoading, user} = useUserContext()

    if (isLoading) {
        return <p>loading</p>
    }
    if (!user) {
        return <Navigate to="/login"/>
    }
    return children
}

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
                element:
                    <RequireAuth>
                        <p>planner</p>
                    </RequireAuth>
            }
        ]
    },
]);

export const App = () => {
    return <UserContextProvider>
        <RouterProvider router={router}/>
    </UserContextProvider>
}
