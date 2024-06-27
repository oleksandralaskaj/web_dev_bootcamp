import {useState} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {DataContextProvider} from "./assets/DataContextProvider.jsx";
import {Home} from "./Home.jsx";
import {Detail} from "./Detail.jsx";

function App() {

    const router = createBrowserRouter([
            {
                path: "/",
                element: <Home/>,
                // children: [
                //     {
                //         path: "articles/:id",
                //         element: <Detail />,
                //     },
                // ],
            },
            {
                path: "/articles/:articleId",
                element: <Detail/>,
                loader: async ({params}) => {
                    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.articleId}`)
                    return await response.json()
                }
            }
        ])
    ;

    return (
        <>
            <DataContextProvider>
                <RouterProvider router={router}/>
            </DataContextProvider>
        </>
    )
}

export default App
