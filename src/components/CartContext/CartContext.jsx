import React, { useState } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);


    const store = {
      cartItems,
      setCartItems,
    };
  

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}