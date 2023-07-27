import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./user/components/Cart/CartContext";
import { ToastContainer } from "react-toastify"; // Import the ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast styles

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> {/* Add the ToastContainer */}
  </React.StrictMode>,
  document.getElementById("root")
);
