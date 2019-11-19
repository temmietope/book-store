import React, { useEffect, useState } from "react";
import { useBooksContext } from "../BookContext";

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
  return (
    <>
      {cartList && cartList.length > 0
        ? renderCartList()
        : "Cart is empty, start shopping now!"}
    </>
  );
};

export default Cart;
