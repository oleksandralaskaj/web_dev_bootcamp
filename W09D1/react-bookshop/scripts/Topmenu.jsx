import React from "react";
import {useState} from 'react';
import {Navigation} from './Navigation.jsx'
import {Burger} from './Burger.jsx'

export function Topmenu() {
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState('')
    const toggleMenu = () => {
        setOpen(!open)
    }

    let [homestyle, aboutstyle, contactstyle] = 'link'

    switch (page) {
        case '':
            homestyle += " link--highlighted";
            break;
        case 'about':
            aboutstyle += " link--highlighted";
            break;
        case 'contact':
            contactstyle += " link--highlighted";
            break;
    }
    return (
        <div id="menu">{
            open
                ? <>
                    <Navigation currentItem={page} homestyle={homestyle} aboutstyle={aboutstyle}
                                contactstyle={contactstyle} onClick = {setPage}/>
                    <Burger onClick={toggleMenu} text={'close'}/>
                </>
                : <Burger onClick={toggleMenu} text={'open'}/>}
        </div>
    )
}