import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
  { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
  { id: 3, name: 'Product 3', price: 30, description: 'Description 3' },
  { id: 4, name: 'Product 4', price: 40, description: 'Description 4' },
  { id: 5, name: 'Product 5', price: 50, description: 'Description 5' },
  { id: 6, name: 'Product 6', price: 60, description: 'Description 6' },
  { id: 7, name: 'Product 7', price: 70, description: 'Description 7' },
  { id: 8, name: 'Product 8', price: 80, description: 'Description 8' },
  { id: 9, name: 'Product 9', price: 90, description: 'Description 9' },
  { id: 10, name: 'Product 10', price: 100, description: 'Description 10' },
];

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 mr-2 text-sm font-medium text-blue-600 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white">Update</button>
                <button className="px-4 py-2 text-sm font-medium text-red-600 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500 focus:text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4">
        <nav className="flex items-center justify-between">
          <div className="flex-1 flex justify-between">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-transparent border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-100 focus:outline-none"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(products.length / productsPerPage)}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-transparent border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-100 focus:outline-none"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProductTable;
