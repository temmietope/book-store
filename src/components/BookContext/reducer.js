export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_BOOK":
        return {
          cartBooks: [...state.cartBooks, action.payload]
        };
      case "DEL_BOOK":
        return {
          cartBooks: state.cartBooks.filter(book => book.title !== action.payload)
        };
      case "START":
        return {
          loading: true
        };
      case "COMPLETE":
        return {
          loading: false
        };
      default:
        throw new Error();
    }
  };
  