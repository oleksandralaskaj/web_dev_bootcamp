import {books} from "./assets/booksList.jsx";
import {Book} from "./Book.jsx";
import React from "react";
import {useState} from 'react'

export function BooksSection() {
    let [booksInCart, setBooksInCart] = useState(0)
    const handleBooksInCart = (delta) => setBooksInCart((booksInCart) => (booksInCart += delta));
    return (
        <div id="books-list">
            Number of books in cart: {booksInCart}
            {books.map((book) => <Book key={book.isbn} handler={handleBooksInCart} book ={book}/>)}
        </div>)
}