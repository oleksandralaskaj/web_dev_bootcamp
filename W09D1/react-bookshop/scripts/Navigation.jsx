import React from "react";

export function Navigation ({homestyle, aboutstyle, contactstyle, onClick}) {

    return (
        <nav>
            <a href="#" className={homestyle} onClick={()=>onClick('')}>Home</a>
            <br/>
            <a href="#" className={aboutstyle} onClick={()=>onClick('about')}>About</a>
            <br/>
            <a href="#" className={contactstyle} onClick={()=>onClick('contact')}>Contact</a>
            <br/>
        </nav>
    )
}


