// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";

// const ProductDetails = () => {
//   const { productTitle } = useParams(); // Use 'productTitle' instead of 'productId'
//   const [productDetails, setProductDetails] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Fetch product details from the backend API based on the productTitle
//     // Replace `http://localhost:3000` with the actual URL of your backend API
//     fetch(`http://localhost:3000/products/title/${productTitle}`)
//       .then((response) => response.json())
//       .then((data) => setProductDetails(data[0])) // Assuming there will be only one result for the specific title
//       .catch((error) => console.error("Error fetching product details:", error));
//   }, [productTitle]);

//   const handleAddToCart = () => {
//     if (productDetails) {
//       setCartItems((prevItems) => [...prevItems, productDetails]);
//     }
//   };

//   if (!productDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="bg-white p-4 shadow">
//         <img
//           src={productDetails.ImageURL}
//           alt={productDetails.ProductName}
//           className="w-full h-40 object-contain mb-4"
//         />
//         <h2 className="text-lg font-bold">{productDetails.ProductName}</h2>
//         <p className="text-gray-500">{productDetails.Description}</p>
//         <div className="flex justify-between items-center mt-4">
//           <p className="text-lg font-bold">${productDetails.Price}</p>
//           <p className="text-gray-500">In Stock: {productDetails.StockQuantity}</p>
//         </div>
//         <button className="bg-blue-800 text-white rounded p-3 mt-4 w-full">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
