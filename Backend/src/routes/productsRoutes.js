import {
  getProductsByTitle,
  getProductsByCategory,
  getProducts,
} from '../controllers/productsRoutesControllers.js';

const productsRoutes = (app) => {
  app.route('/products').get(getProducts);

  app.route('/products/title/:title').get(getProductsByTitle);

  app.route('/products/category/:category').get(getProductsByCategory);

  // Update the route to handle both title and category search
  app.route('/products/search').get((req, res) => {
    const { search, title, category } = req.query;

    if (search && title === 'true' && category) {
      // If both title and category are provided, search by both
      getProductsByTitleAndCategory(req, res);
    } else if (search && title === 'true') {
      // If only title is provided, search by title
      getProductsByTitle(req, res);
    } else if (search && category) {
      // If only category is provided, search by category
      getProductsByCategory(req, res);
    } else {
      // If no valid search criteria provided, return all products
      getProducts(req, res);
    }
  });
};

export default productsRoutes;
