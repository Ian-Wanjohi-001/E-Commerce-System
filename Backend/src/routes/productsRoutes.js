import {
  getProductsByTitle,
  getProductsByCategory,
  getProducts,
} from '../controllers/productsRoutesControllers.js';

const productsRoutes = (app) => {
  
  app.route('/products')
  .get(getProducts);

  app.route('/getProductsByTitle/:title')
  .get(getProductsByTitle);

  app.route('/products/category/:category')
  .get(getProductsByCategory);

  
}
export default productsRoutes;
