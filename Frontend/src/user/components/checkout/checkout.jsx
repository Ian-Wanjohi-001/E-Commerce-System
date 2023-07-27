import React from "react";
import CartBox from "../utilities/CartBox";
import Header from "../header-footer/header";
import { useCart } from "../Cart/CartContext";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price of all products in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.Price * item.Quantity, 0);

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-xl font-semibold mb-3">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <CartBox
                  key={item.ProductID}
                  item={item}
                  onRemove={() => removeFromCart(item.ProductID)} // Pass the remove function to the CartBox component
                />
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="flex items-center justify-between mt-4">
              <div className="font-bold">Total Price:</div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
          )}
          <button className="w-full py-3 bg-blue-500 text-white font-bold rounded mt-4">
            Continue to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
