import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const mappedProductData = useSelector((state) => state.allProducts?.allProducts);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    const filteredProducts = mappedProductData.filter(
      (product) =>
        product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setLoading(false);
    if (filteredProducts.length === 0) {
      toast.info("No products found.");
    }
    setSearchTerm(""); // Clear the search field
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddToCart = async (product) => {
    try {
      // Make a POST request to add the item to the cart
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ProductID: product.ProductID,
          Quantity: 1,
          CustomerID: customerId, // Replace 'customerId' with the authenticated user's ID
          Name: product.ProductName,
          Price: product.Price,
          // Add any other required fields for creating a cart item
        }),
      });
      const data = await response.json();
      console.log("Item added to cart:", data);
  
      // Update the cart items using the state
      setCartItems((prevCartItems) => [...prevCartItems, data]);
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle any errors or show an error message to the user.
    }
  };

  const loaderCss = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <div className="header flex flex-col w-full fixed top-0 left-0">
        <div className="top h-[25px] bg-black"></div>
        <div className="bottom w-full h-[50px] flex flex-row justify-around items-center">
          <ul className="flex items-center gap-[3rem] cursor-pointer">
            <NavLink to="/landingpage1">
              <li>
                <span className="font-bold text-xl">
                  <span className="text-blue-500">S</span>
                  martBu
                  <span className="text-blue-500">Y</span>
                </span>
              </li>
            </NavLink>
            <NavLink to="/shop">
              <li>Shop</li>
            </NavLink>
            <NavLink to="/landingpage2">
              <li>Latest-Arrivals</li>
            </NavLink>
            <NavLink to="/reviews">
              <li>Reviews</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <li>
              <div className="search flex gap-[1rem] items-center text-gray-500">
                <input
                  type="text"
                  placeholder="Search by product name..."
                  className="border p-2 rounded focus:outline-none"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  onKeyPress={handleSearchInputKeyPress}
                />
              </div>
            </li>
          </ul>
          <div className="utilities flex items-center gap-4 sm:gap-8">
            <NavLink to="/cart">
              <div className="bag flex gap-2">
                <FaShoppingCart className="h-[25px]" />
                {cartItems.length}
              </div>
            </NavLink>
            <NavLink to="/login">
              <div className="login-tag">Login</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="body-content mt-20">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <CircularProgress size={35} style={loaderCss} />
          </div>
        ) : searchResults.length > 0 ? (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchResults.map((product) => (
                <div key={product.ProductID} className="bg-white p-4 shadow">
                  <img
                    src={product.imageUrl}
                    alt={product.ProductName}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h2 className="text-lg font-bold">{product.ProductName}</h2>
                  <p className="text-gray-500">{product.Description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold">${product.Price}</p>
                    <p className="text-gray-500">In Stock: {product.StockQuantity}</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-800 text-white rounded p-3 mt-4 w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4">
            {/* Render a toast when there are no search results */}
            
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
