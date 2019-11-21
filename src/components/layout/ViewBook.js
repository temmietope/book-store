import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useBooksContext } from "../BookContext";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "../Session";

const ViewBook = props => {
  const [book, setBook] = useState({});
  const { addBook, cartBooks } = useBooksContext();
  const addToCart = authUser => {
    if (!authUser) {
      alert("Please log in or signup before shopping");
      return props.history.push(ROUTES.LOG_IN);
    }
    addBook(book.title, book.bid, book.author);
    console.log(cartBooks);
  };
  useEffect(() => {
    const book = props.location.state.book;
    setBook(book);
  }, [props.location.state.book]);
  const { title, author, summary, genre, numberOfCopies } = book;
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <section>
          <h3>{title}</h3>
          <small>{`by ${author}.  Genre: ${genre}.  
Number of copies available for sale: ${numberOfCopies}`}</small>
          <p>{summary}</p>
          <button
            onClick={() => {
              addToCart(authUser);
            }}
          >
            Add To cart
          </button>
        </section>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withRouter(ViewBook);
