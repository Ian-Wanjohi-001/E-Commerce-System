import sql from 'mssql';
import config from '../database/config.js';

// Get all cart items
export const getCart = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Cart c INNER JOIN Products p ON c.ProductID = p.ID');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving cart items... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Get a single cart item by ID
export const getCartById = async (req, res) => {
  const cartItemId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('cartItemId', sql.Int, cartItemId)
      .query('SELECT * FROM Cart WHERE CartID = @cartItemId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the cart item... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Create a new cart item
export const createCart = async (req, res) => {
  const { ProductID, Quantity, Name, Price, CustomerID } = req.body;

  // Make sure the ProductID is provided and not null
  if (!ProductID) {
    return res.status(400).json({ error: "ProductID is required" });
  }

  try {
    // Insert the new cart item into the database
    const pool = await sql.connect(config.sql);
    await pool
      .request()
      .input("ProductID", sql.Int, ProductID)
      .input("Quantity", sql.Int, Quantity)
      .input("CustomerID", sql.Int, CustomerID) // Pass the 'CustomerID' obtained from the request body
      .input("Name", sql.VarChar(255), Name)
      .input("Price", sql.Decimal(10, 2), Price)
      .query(
        "INSERT INTO Cart (ProductID, Quantity, CustomerID, Name, Price) VALUES (@ProductID, @Quantity, @CustomerID, @Name, @Price)"
      );

    res.status(201).json({ message: "Cart item created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: `An error occurred while creating the cart item... ${error.message}` });
  } finally {
    sql.close();
  }
};
// Update a cart item
export const updateCart = async (req, res) => {
  const CartID = req.params.id;
  const { ProductID, Quantity, CustomerID, Name, Price } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('CartID', sql.Int, CartID)
      .input('ProductID', sql.Int, ProductID)
      .input('Quantity', sql.Int, Quantity)
      .input('CustomerID', sql.Int, CustomerID)
      .input('Name', sql.VarChar(255), Name)
      .input('Price', sql.Decimal(10, 2), Price)
      .query(
        'UPDATE Cart SET ProductID = @ProductID, Quantity = @Quantity, CustomerID = @CustomerID, Name = @Name, Price = @Price WHERE CartID = @CartID'
      );

    // Check if the cart item was updated successfully
    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(200).json({ message: 'Cart item updated successfully' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: `An error occurred while updating the cart item... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Delete a cart item
export const deleteCart = async (req, res) => {
  try {
    const CartID = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('CartID', sql.Int, CartID)
      .query('DELETE FROM Cart WHERE CartID = @CartID');

    // Check if the cart item was deleted successfully
    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(200).json({ message: 'Cart item deleted successfully' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: `An error occurred while deleting the cart item... ${error.message}` });
  } finally {
    sql.close();
  }
};

