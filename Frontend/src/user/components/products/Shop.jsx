import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };
  
    fetchProducts();
  }, []);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  // Filter the products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.CategoryName === selectedCategory)
    : products;

  const categories = [
    "Hoodies",
    "Jackets",
    "Shirts",
    "Sweaters",
    "Sweatpants",
    "T-Shirts",
    "Winter Hats",
  ];

  return (
    <div>
      {/* ... */}
      <div className="flex flex-col gap-2">
        {/* Render the category buttons */}
        {categories.map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } p-2 rounded-md`}
            onClick={() => handleCategorySelection(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* ... */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {/* Render filteredProducts as cards */}
        {filteredProducts.map((product) => (
          <ProductCard key={product.ProductID} product={product} />
        ))}
      </div>
      {/* ... */}
    </div>
  );
};

export default Shop;