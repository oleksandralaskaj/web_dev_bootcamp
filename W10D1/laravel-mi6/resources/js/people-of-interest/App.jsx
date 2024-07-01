import React from "react";
import {Home} from "./components/Home.jsx";
import {Navigation} from "./common/Navigation.jsx";
import {People} from "./components/People.jsx";
import {PersonDetail} from "./components/PersonDetail.jsx";

export const App = () => {

    return (
        <>
            <Navigation/>
            <div className="main">
                <People/>
            </div>
        </>
    )
}
