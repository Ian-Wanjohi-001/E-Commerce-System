import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./redux/store";
import { CartProvider } from "./user/components/Cart/CartContext";
import { ToastContainer } from "react-toastify"; // Import the ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast styles

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <CartProvider>
      <App />
    </CartProvider>
    </PersistGate>
    </Provider>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> {/* Add the ToastContainer */}
  </React.StrictMode>,
  document.getElementById("root")
);
