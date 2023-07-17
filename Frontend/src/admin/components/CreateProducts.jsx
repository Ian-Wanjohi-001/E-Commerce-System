import { useState } from "react";

const CreateProducts = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setcategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Perform form submission logic here
    // You can access the form values in the state variables (productName, productDescription, price)
  };

  return (
    <form onSubmit={handleSubmit} className="w-[50%]">
      <div className="mb-4">
        <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productDescription" className="block text-gray-700 text-sm font-bold mb-2">
          Product Description
        </label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={e => setProductDescription(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <select
          id="category"
          value={price}
          onChange={e => setcategory(e.target.value)}
          className="appearance-none border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">c1</option>
          <option value="">c2</option>
          <option value="">c3</option>
        </select>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </div>
    </form>
  );
};


export default CreateProducts;
