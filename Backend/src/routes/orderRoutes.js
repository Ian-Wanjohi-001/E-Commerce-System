import express from 'express';
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';

const router = express.Router();

// GET all orders
router.get('/orders', getOrders);

// GET a single order by ID
router.get('/orders/:id', getOrder);

// CREATE a new order
router.post('/orders', createOrder);

// UPDATE an existing order by ID
router.put('/orders/:id', updateOrder);

// DELETE an order by ID
router.delete('/orders/:id', deleteOrder);

export default router;
