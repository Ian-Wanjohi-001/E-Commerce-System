import React, { useState, useEffect } from "react";
import Footer from "../header-footer/footer";
import Header from "../header-footer/header";
import Page1 from "./pages/page1";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LandingPage1 = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ProductID: product.ProductID, // Make sure the correct product ID is provided
          Quantity: 1, // Or any desired quantity value
          // Other required fields for creating a cart item
        }),
      });
      const data = await response.json();
      console.log("Item added to cart:", data);
      // Optionally, you can show a success message or update the cart state.
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle any errors or show an error message to the user.
    }
  };

  return (
    <div className="flex justify-between min-h-screen flex-col bg-blue-50">
      <div className="header sticky top-0 left-0 w-full z-50">
        <Header cartItems={cartItems} /> {/* Pass the cartItems state as a prop to the Header component */}
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
                  <p className="text-gray-500">In Stock: {product.StockQuantity}</p>
                </div>
                {/* Add to Cart button */}
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
      {/* Wrap the cart icon with NavLink to navigate to the cart page */}
      <NavLink to="/cart" className="cart-icon">
        <div className="bag flex gap-2">
          <FaShoppingCart className="h-[25px]" />
          {cartItems.length}
        </div>
      </NavLink>
    </div>
  );
};

export default LandingPage1;
