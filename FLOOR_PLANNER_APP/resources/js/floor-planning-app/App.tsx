import React, {FC,} from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {UserContextProvider, useUserContext} from "./contexts/UserContext";
import {Layout} from "./pages/Layout";
import {Register} from "./pages/Register";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Planner} from "./pages/Planner";

type Props = {
    children?: React.ReactNode
};
const RequireAuth: FC<Props> = ({children}) => {
    const {isLoaded, user} = useUserContext()

    if (!isLoaded) {
        return <p>loading</p>
    }

    if (isLoaded && !user) {
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
                        <Planner/>
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
