import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        className="h-[200px] w-full object-contain mb-4"
        src={product.ImageURL}
        alt={product.ProductName}
      />
      <h2 className="text-lg font-bold mb-2">{product.ProductName}</h2>
      <p className="text-gray-500 mb-4">{product.Description}</p>
      <p className="text-lg font-bold">${product.Price}</p>
      <p>Category: {product.CategoryName}</p>
    </div>
  );
};

export default ProductCard;
