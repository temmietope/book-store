import React, { useEffect, useState } from "react";
import { useBooksContext } from "../BookContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartBooks } = useBooksContext();
  const [cartList, setCartList] = useState();
  useEffect(() => {
    console.log(cartBooks);
    setCartList(cartBooks);
  }, [cartBooks]);

  const renderCartList = () => {
    return (
      <>
        {cartList.map((cl, index) => {
          return (
            <div key={cl.id}>
              {`${index}

            Title: ${cl.title};

            Author: ${cl.author}
            `}
            </div>
          );
        })}
      </>
    );
  };
  const renderRedirectToHome = () => {
    return (
      <div>
        <p>Cart is empty, start shopping now!</p>
        <Link to="/">Click here.</Link>
      </div>
    );
  };
  return (
    <>
      {cartList && cartList.length > 0
        ? renderCartList()
        : renderRedirectToHome()}
    </>
  );
};

export default Cart;
