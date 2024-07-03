import React, {useState} from "react";
import {Home} from "./pages/Home.jsx";
import {Navigation} from "./common/Navigation.jsx";
import {People} from "./pages/People.jsx";
import {Missions} from "./pages/Missions.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

export const App = () => {
    const [content, setContent] = useState('')

    // const defineContent = () => {
    //     let contentComponent;
    //     switch (content) {
    //         case "" :
    //             contentComponent = <Home/>
    //             break;
    //         case "people-of-interest" :
    //             contentComponent = <People/>
    //             break;
    //         case "missions" :
    //             contentComponent = <Missions/>
    //             break;
    //     }
    //     return contentComponent
    // }

    return (
        <BrowserRouter>
            <Navigation content={content} handler={setContent}/>
            <div className="main">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/people-of-interest' element={<People/>}/>
                    <Route path='/missions' element={<Missions/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
