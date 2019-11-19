import React from "react"
import BookItem from "./BookItem"

const BookList = ({ books, addToCart }) => (
    <>
        <h2>Available Books</h2>
        <section className="booklist">
            {books.map(book => (
                <BookItem
                    key={book.uid}
                    book={book}
                    imageUrl='./images/book-rose.jpg'
                    id={book.uid}
                    addToCart={addToCart} />
            ))}
        </section>
    </>
);

export default BookList