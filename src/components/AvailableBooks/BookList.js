import React, { Fragment } from "react";
import BookItem from "./BookItem";
import { AuthUserContext } from "../Session";

const BookList = ({ books }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Fragment>
        <h2>Available Books</h2>
        <section className="booklist">
          {books.map(book => (
            <BookItem
              key={book.uid}
              book={book}
              imageUrl="./images/book-rose.jpg"
              id={book.uid}
              authUser={authUser}
            />
          ))}
        </section>
      </Fragment>
    )}
  </AuthUserContext.Consumer>
);

export default BookList;
