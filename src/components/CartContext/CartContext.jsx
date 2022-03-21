import React, { useState } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [pvp, setPvp] = useState(0);

    const store = {
      cartItems,
      setCartItems,
      pvp,
      setPvp
    };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}