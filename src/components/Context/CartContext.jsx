import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addProductToCart = product => {
    setCart([...cart, product]);
    setCount(count + 1);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    localStorage.setItem("count", JSON.stringify(count + 1));
  };

  return (
    <CartContext.Provider value={{ cart, addProductToCart, setCart, count, setCount}}>
      {children}
    </CartContext.Provider>
  );
};
