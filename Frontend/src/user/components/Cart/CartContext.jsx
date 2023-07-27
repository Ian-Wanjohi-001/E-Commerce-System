// CartContext.js

import React, { createContext, useState, useContext } from "react";

// Create the cart context
const CartContext = createContext();

// Create a custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}

// Create the CartProvider component to wrap your app and provide the cart context
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.ProductID !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
