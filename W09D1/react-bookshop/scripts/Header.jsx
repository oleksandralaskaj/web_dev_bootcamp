import React from "react";
import {Topmenu} from "./Topmenu.jsx"
export function Header ({title}) {
    return (
        <header>
            <h1>{title}</h1>
            <Topmenu/>
        </header>
    )


}
