import React from "react";
import { withRouter } from "react-router";
import { useBooksContext } from "../BookContext";
import * as ROUTES from "../constants/routes";

const BookItem = ({ book, imageUrl, id, history, authUser }) => {
  const { addBook, cartBooks } = useBooksContext();
  const addToCart = () => {
    if (!authUser) {
      alert("Please log in or signup before shopping");
      return history.push(ROUTES.LOG_IN);
    }
    addBook(book.title, id, book.author);
    console.log(cartBooks);
  };

  return (
    <span className="book">
      <img src={imageUrl} alt={book.title} />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>
          <strong>By </strong>
          {book.author}
        </p>
        <small>
          <strong>Genre: </strong>
          {book.genre}
        </small>
        <div
          className="btn"
          onClick={() => {
            addToCart();
          }}
        >
          <button>Add To Cart</button>
        </div>
        <div
          className="btn"
          onClick={() => {
            history.push({
              pathname: `/books/${id}`,
              state: {
                book
              }
            });
          }}
        >
          <button>Details</button>
        </div>
      </div>
    </span>
  );
};

export default withRouter(BookItem);
