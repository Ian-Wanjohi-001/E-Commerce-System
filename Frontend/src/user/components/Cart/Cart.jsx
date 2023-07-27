import React from "react";
import { useCart } from "./CartContext";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi"; // Import the FiHome icon from React Icons
import Footer from "../header-footer/footer";
import "./cart.css"; // Import the cart.css file

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.Price, 0);
  };

  return (
    <>
      <div className="min-h-screen bg-blue-50">
        <header className="header">
          <div className="header-left">
            <NavLink to="/landingpage1" className="home-icon">
              <FiHome size={24} /> {/* Use the FiHome icon from React Icons */}
            </NavLink>
          </div>
          <div className="header-right">
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
          </div>
        </header>
        <div className="container mx-auto mt-8 mb-8 px-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cartItems.map((item) => (
                  <div
                    key={item.ProductID}
                    className="cart-item" // Use the cart-item class defined in cart.css
                  >
                    <div>
                      <img
                        src={item.ImageURL}
                        alt={item.ProductName}
                        className="product-image" // Use the product-image class if needed
                      />
                      <p className="product-name">{item.ProductName}</p>
                      <p className="product-price">${item.Price}</p>
                    </div>
                    <button
                      className="remove-button" // Use the remove-button class defined in cart.css
                      onClick={() => handleRemoveFromCart(item.ProductID)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="clear-cart-button" // You can define this class in cart.css
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex justify-end mt-6">
                <div className="text-xl font-semibold">
                  Total: ${calculateTotalPrice()}
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <NavLink to="/checkout">
                  <button className="proceed-to-checkout-button">
                    Proceed to Checkout
                  </button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
