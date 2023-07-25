import sql from 'mssql';
import config from '../database/config.js';

// Get all orders
export const getOrders = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool.request().query("SELECT * FROM Orders");
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving orders' });
  } finally {
    sql.close();
  }
};

// Get a single order by ID
export const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input("id", sql.Int, id)
      .query("SELECT * FROM Orders WHERE OrderID = @id");
    res.status(200).json(result.recordset[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving an order' });
  } finally {
    sql.close();
  }
};

export const createOrder = async (req, res) => {
  try {
    const { CustomerID, ShippingAddress, PaymentStatus, OrderStatus } = req.body;
    const pool = await sql.connect(config.sql);
    await pool.request()
      .input('CustomerID', sql.Int, CustomerID)
      .input('ShippingAddress', sql.VarChar(255), ShippingAddress)
      .input('PaymentStatus', sql.VarChar(255), PaymentStatus)
      .input('OrderStatus', sql.VarChar(255), OrderStatus)
      .query("INSERT INTO Orders (CustomerID, ShippingAddress, PaymentStatus, OrderStatus) VALUES (@CustomerID, @ShippingAddress, @PaymentStatus, @OrderStatus)");
    res.status(200).json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating an order' });
  } finally {
    sql.close();
  }
};

// Update an order by ID
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { ShippingAddress, PaymentStatus, OrderStatus } = req.body;
    let pool = await sql.connect(config.sql);
    await pool.request()
      .input("OrderID", sql.Int, id)
      .input("ShippingAddress", sql.VarChar(255), ShippingAddress)
      .input("PaymentStatus", sql.VarChar(255), PaymentStatus)
      .input("OrderStatus", sql.VarChar(255), OrderStatus)
      .query("UPDATE Orders SET ShippingAddress = @ShippingAddress, PaymentStatus = @PaymentStatus, OrderStatus = @OrderStatus WHERE OrderID = @OrderID;");
    res.status(200).json({ message: 'Updated the order successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating an order' });
  } finally {
    sql.close();
  }
};

// Delete an order by ID
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await sql.connect(config.sql);
    await pool.request()
      .input("OrderID", sql.Int, id)
      .query("DELETE FROM Orders WHERE OrderID = @OrderID");
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting an order' });
  } finally {
    sql.close();
  }
};
