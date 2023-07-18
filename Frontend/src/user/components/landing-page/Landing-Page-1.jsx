import React, { useState, useEffect } from "react";
import Footer from "../header-footer/footer";
import Header from "../header-footer/header";
import Page1 from "./pages/page1";

const LandingPage1 = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="flex justify-between min-h-screen flex-col bg-blue-50">
      <div className="header sticky top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="page-content mt-[3rem]">
        <Page1 />
      </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage1;


// import React from "react";
// import Footer from "../header-footer/footer";
// import Header from "../header-footer/header";
// import Page1 from "./pages/page1";

// const LandingPage1 = () => {
//   return (
//     <div className="flex justify-between min-screen flex-col">
//       <div className="header sticky top-0 left-0 w-full z-50 ">
//         <Header />
//       </div>

//       <div className="page-content  mt-[8rem]">
//         <Page1 />
//       </div>

//       <div className="footer">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default LandingPage1;
