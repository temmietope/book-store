import React from "react";
import { withRouter } from "react-router";
import { useBooksContext } from "../BookContext";

const BookItem = ({ book, imageUrl, id, history, addToCart }) => {
  const { addBook, cartBooks } = useBooksContext();

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
            // alert("bookadded");
            // addToCart(book.title, id, book.author);
            addBook(book.title, id, book.author);
            console.log(cartBooks);
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
