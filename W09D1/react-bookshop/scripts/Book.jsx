import {books} from "./assets/booksList.jsx";
import React from "react";
import {useState} from 'react'

export function Book({handler, book}) {
    const [isInCart, setIsInCart] = useState(false)
    return (
        <div className="product" id={book.isbn}>
            <p>"{book.title}" by {book.author}</p>
            <button onClick={() => {
                isInCart ? handler(-1) : handler(1)
                setIsInCart(!isInCart)
            }}>{isInCart ? "Remove form cart" : 'Add to cart'}</button>
        </div>
    )
}
