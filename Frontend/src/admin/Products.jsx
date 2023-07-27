import { useState } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Products() {
  const [loading, setLoading] = useState(false);
  const mappedProductData = useSelector((state) => state.allProducts?.allProducts);

  return (
    <>
      <div className="page-content mt-8rem">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <CircularProgress />
          </div>
        ) : (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mappedProductData?.map((product) => (
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
                  <div className="flex  mt-3 "  style={{ justifyContent: "space-between", margin:'10px 20px' }}>
                  <EditIcon
                      color="primary"
                      fontSize="small"
                      onClick={() => handleUpdateProduct(product.ProductID)}
                      className="cursor-pointer"
                    />

                    <DeleteIcon
                      color="error"
                      fontSize="small"
                      onClick={() => handleDeleteProduct(product.ProductID)}
                      className="cursor-pointer"
                    />
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
