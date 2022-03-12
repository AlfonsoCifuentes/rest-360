import React, { useState } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [pedidoItems, setPedidoItems] = useState([]);


    const store = {
      cartItems,
      setCartItems,
      pedidoItems,
      setPedidoItems
    };
  

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}