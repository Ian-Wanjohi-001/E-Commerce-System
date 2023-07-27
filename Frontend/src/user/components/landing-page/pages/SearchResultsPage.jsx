import { useState } from 'react';
import Axios from 'axios';
import './SearchPage.css';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [productNotFound, setProductNotFound] = useState(false); // Rename to productNotFound

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.get(`http://localhost:3000/products?search=${searchQuery}`);
      if (response.data.length === 0) {
        setProductNotFound(true); // Set productNotFound to true if no products are found
      } else {
        setSearchResults(response.data);
        setProductNotFound(false); // Set productNotFound to false if products are found
      }
    } catch (error) {
      console.error('Error occurred while searching products:', error);
    }
  };

  return (
    <>
      <div className="search-page">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Enter product title or category"
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </div>
        </form>

        {productNotFound && <p className="no-results-message">Product Not Found</p>}

        <div className="product-grid">
          {searchResults.map((product) => (
            <div key={product.ProductID} className="search-card">
              <div className="search-card-content">
                <h2 className="search-product-title">{product.ProductName}</h2>
                <div className="search-details">
                  <p>Product ID: {product.ProductID}</p>
                  <p className="search-description">{product.Description}</p>
                  <p className="search-price">Price: ${product.Price}</p>
                  {/* Add other product details here */}
                </div>
                <Link to={`/product/${product.ProductID}`} className="search-view-btn">
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
