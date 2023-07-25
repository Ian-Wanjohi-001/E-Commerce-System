import { getProductsByTitle, getProductsByCategory, getProducts } from '../controllers/productsRoutesControllers.js';

const productsRoutes = (app) => {
  app.route('/products')
    .get(getProducts);

  app.route('/products/title/:title')
    .get(getProductsByTitle);

  app.route('/products/category/:CategoryID')
    .get(getProductsByCategory);
};

export default productsRoutes;
