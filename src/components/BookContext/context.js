import { useReducer } from "react";
import createUseContext from "constate";
import { reducer } from "./reducer";

// Define the initial state of our app
const initialState = {
  cartBooks: [],
  loading: false,
  error: null
};

const useBooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartBooks, loading } = state;
  const addBook = (title, id, author) => {
    dispatch({
      type: "ADD_BOOK",
      payload: { id, title, author }
    });
  };
  const delBook = id => {
    dispatch({
      type: "DEL_CONTACT",
      payload: { id }
    });
  };
  return { cartBooks, loading, addBook, delBook };
};

// Share your custom hook
export const useBooksContext = createUseContext(useBooks);
