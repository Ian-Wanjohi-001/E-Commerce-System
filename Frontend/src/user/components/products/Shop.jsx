import { useState, useEffect } from "react";
import Product from "./Product";

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

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === null || product.CategoryName === selectedCategory
  );

  return (
    <div>
      <div className="bg-black text-white px-5 py-7">
        <div className="w-[50%]">
          <h1 className="font-bold text-2xl">Shop Men's</h1>
          <p>
            Revamp your life with the latest designer trends in men's clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <h1>Filters</h1>
          </div>
          <select className="border w-[10%] mb-3" name="" id=""></select>
        </div>
        <div className="flex justify-between">
          <div>
            <h1>Categories</h1>
            <div className="flex flex-col gap-2">
              <button
                className={`${
                  selectedCategory === "Hoodies"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } p-2 rounded-md`}
                onClick={() => handleCategorySelection("Hoodies")}
              >
                Hoodies
              </button>
              <button
                className={`${
                  selectedCategory === "Jackets"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } p-2 rounded-md`}
                onClick={() => handleCategorySelection("Jackets")}
              >
                Jackets
              </button>
              <button
                className={`${
                  selectedCategory === "Shirts"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } p-2 rounded-md`}
                onClick={() => handleCategorySelection("Shirts")}
              >
                Shirts
              </button>
              <button
                className={`${
                  selectedCategory === "Sweaters"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } p-2 rounded-md`}
                onClick={() => handleCategorySelection("Sweaters")}
              >
                Sweaters
              </button>
              <button
                className={`${
                  selectedCategory === "Sweatpants"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } p-2 rounded-md`}
                onClick={() => handleCategorySelection("Sweatpants")}
              >
                Sweatpants
              </button>
              <button
                className={`${
                  selectedCategory === "Winter Hats"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } p-2 rounded-md`}
                onClick={() => handleCategorySelection("Winter Hats")}
              >
                Winter Hats
              </button>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3">
            {filteredProducts.map((product) => (
              <Product key={product.ProductID} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;




// import Product from "./Product";
// const Shop = () => {
//   return (
//     <div>
//       <div className="bg-black text-white px-5 py-7">
//         <div className=" w-[50%]">
//           <h1 className="font-bold text-2xl">Shop Men's</h1>
//           <p>
//             Revamp your life with the latest designer trandes in mens clothing
//             or achieve a perfectly curated wardrobe thanks to our line-up of
//             timeline pieces.
//           </p>
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="flex justify-between">
//           <div>
//             <h1>Filters</h1>
//           </div>
//           <select className="border w-[10%] mb-3" name="" id=""></select>
//         </div>
//         <div className="flex justify-between">
//           <div>
//             <h1>Categories</h1>
//             <p>
//               <span>
//                 <input type="checkbox" />
//               </span>
//               Hoodies
//             </p>
//             <p>
//               <span>
//                 <input type="checkbox" />
//               </span>
//               Jackets
//             </p>
//             <p>
//               <span>
//                 <input type="checkbox" />
//               </span>
//               Shirts
//             </p>
//             <p>
//               <span>
//                 <input type="checkbox" />
//               </span>
//               Sweaters
//             </p><p>
//               <span>
//                 <input type="checkbox" />
//               </span>
//               Sweatpants
//             </p>
//             <p>
//               <span>
//                 <input type="checkbox" />
//               </span>
//               Winter Hats
//             </p>
//             <p>
//               <span>
//                 <input type="checkbox" />
//               </span>
//               Jackets
//             </p>
//           </div>
          {/* <div className="grid grid-cols-6 gap-3 ">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div> */}
        {/* </div>
      </div>
    </div>
  );
};

export default Shop; */}
