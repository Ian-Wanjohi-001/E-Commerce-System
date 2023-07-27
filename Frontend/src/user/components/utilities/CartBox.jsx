import React from "react";
import Header from "../header-footer/header";
import Footer from "../header-footer/footer";
import CartBox from "../utilities/CartBox";
import { useCart } from "../Cart/CartContext";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Calculate the total price of the products in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.Price, 0);

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartItems.map((item) => (
              <CartBox
                key={item.ProductID}
                item={item}
                onRemove={() => handleRemoveFromCart(item.ProductID)}
              />
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mt-8">
            <div className="font-semibold text-xl">Total Price: ${totalPrice.toFixed(2)}</div>
            <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded">
              Continue to Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
