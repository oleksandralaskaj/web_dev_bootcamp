import React from "react";
import {useEffect, useState} from "react";
import {Header} from "./Header.jsx"
import {books} from "./assets/booksList.jsx";
import {Book} from "./Book.jsx";
import {BooksSection} from "./BooksSection.jsx";

export function App() {

    return (
        <>
            <Header title={"Hello there"}/>
            <BooksSection/>
        </>
    )
}