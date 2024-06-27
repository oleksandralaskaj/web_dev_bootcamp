import './App.css'
import {ThemeContextProvider} from './ThemeContext.jsx'
import {Background} from "./assets/Background.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {A} from "./assets/A.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Background/>,
            children: [
                {
                    path: "about",
                    element: <A/>,
                },
            ],
        },
    ]);

    return (<ThemeContextProvider>
        <RouterProvider router={router}/>
    </ThemeContextProvider>)
}

export default App
