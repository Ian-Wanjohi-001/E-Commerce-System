import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../header-footer/footer";
import Header from "../header-footer/header";
import Page1 from "./pages/page1";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";

const LandingPage1 = () => {
  const { cartItems, addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [userDetails, setUserDetails] = useState({
    customerId: localStorage.getItem("customerId") || "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Update local storage whenever the customerId changes
    localStorage.setItem("customerId", userDetails.customerId);
  }, [userDetails.customerId]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartCount((prevCartCount) => prevCartCount + 1);
    toast.success("Item added to cart successfully");
  };

  return (
    <div className="flex justify-between min-h-screen flex-col bg-blue-50">
      <div className="header sticky top-0 left-0 w-full z-50">
        <Header cartItems={cartItems} />
      </div>
      <Page1 />
      <div className="page-content mt-8rem">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.ProductID} className="bg-white p-4 shadow">
                <img
                  src={product.ImageURL}
                  alt={product.ProductName}
                  className="w-full h-40 object-contain mb-4"
                />
                <h2 className="text-lg font-bold">{product.ProductName}</h2>
                <p className="text-gray-500">{product.Description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-bold">${product.Price}</p>
                  <p className="text-gray-500">
                    In Stock: {product.StockQuantity}
                  </p>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <NavLink to="/cart" className="cart-icon">
        <div className="bag flex gap-2">
          <FaShoppingCart className="h-[25px]" />
          {cartCount}
        </div>
      </NavLink>
    </div>
  );
};

export default LandingPage1;
