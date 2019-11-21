import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import BookList from "./BookList";
import "./AvailableBooks.css";
// import { useBooksContext } from "../BookContext";

const AvailableBooksBase = props => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const { addBook } = useBooksContext();
  useEffect(() => {
    setLoading(true);
    props.firebase.books().on("value", snapshot => {
      const bookObject = snapshot.val();
      console.log(bookObject);
      if (bookObject) {
        const bookList = Object.keys(bookObject).map(key => ({
          ...bookObject[key],
          bid: key
        }));
        setBooks(bookList);
        setLoading(false);
      } else {
        setBooks(null);
        setLoading(false);
      }
    });
    return () => props.firebase.books().off();
  }, [props.firebase]);

  return (
    <div className="available-books">
      {loading ? (
        <div>Loading</div>
      ) : books ? (
        <BookList books={books} />
      ) : (
        <div>There are no books ...</div>
      )}
    </div>
  );
};

const AvailableBooks = compose(withRouter, withFirebase)(AvailableBooksBase);

export default AvailableBooks;
