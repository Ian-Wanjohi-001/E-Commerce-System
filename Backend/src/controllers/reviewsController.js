import sql from 'mssql';
import config from '../database/config.js';

// Creating a connection pool
const pool = new sql.ConnectionPool(config.sql);



// POST /reviews // create review
export const createReview = async (req, res) => {
  const { ProductID, CustomerID, ReviewContent, Rating } = req.body;
  let connection;
  try {
    connection = await pool.connect();
    // Check if there is a similar review by the user for the product
    const query = `SELECT * FROM Reviews WHERE CustomerID = @CustomerID AND ReviewContent = @ReviewContent AND ProductID = @ProductID`;
    const result = await connection.request()
      .input('CustomerID', CustomerID)
      .input('ReviewContent', ReviewContent)
      .input('ProductID', ProductID)
      .query(query);

    if (result.recordset.length > 0) {
      return res.status(400).json({ error: 'Duplicate review. Please enter a different review' });
    }

    // Insert a new review
    const insertQuery = `INSERT INTO Reviews (ProductID, CustomerID, ReviewContent, Rating) VALUES (@ProductID, @CustomerID, @ReviewContent, @Rating)`;
    await connection.request()
      .input('ProductID', sql.Int, ProductID)
      .input('CustomerID', sql.Int, CustomerID)
      .input('ReviewContent', sql.VarChar, ReviewContent)
      .input('Rating', sql.Int, Rating)
      .query(insertQuery);

    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
    console.log(error);
  } finally {
    sql.close();
  }
};

export const getReviews = async (req, res) => {
  try {
    const { user_id } = req.params;

    const pool = await sql.connect(config.sql);
    const request = new sql.Request(pool);

    const query = 'SELECT * FROM Reviews WHERE CustomerID = @customer_id';
    request.input('customer_id', sql.Int, user_id);

    const result = await request.query(query);

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching reviews.' });
    console.error('An error occurred while fetching reviews:', error);
  } finally {
    sql.close();
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { ReviewID } = req.params; // Updated key to "ReviewID"

    const pool = await sql.connect(config.sql);
    const request = new sql.Request(pool);
    // Delete the review from the database
    await request.input('reviewId', sql.Int, ReviewID).query('DELETE FROM Reviews WHERE ReviewID = @reviewId'); // Updated key to "ReviewID"

    res.status(200).json({ message: 'Review deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the review.' });
    console.error('An error occurred while deleting the review:', error);
    console.log(error);
  } finally {
    sql.close();
  }
};

export const updateReviewContent = async (req, res) => {
  try {
    const { ReviewID } = req.params; // Updated key to "ReviewID"
    const { ReviewContent } = req.body; // Updated key to "ReviewContent"

    // Create a connection pool
    const pool = await sql.connect(config.sql);

    // Prepare the SQL query
    const query = `
      UPDATE Reviews
      SET ReviewContent = @ReviewContent
      WHERE ReviewID = @ReviewID
    `;

    // Create a new request instance
    const request = new sql.Request(pool);

    // Set the parameters
    request.input('ReviewID', sql.Int, ReviewID); // Updated key to "ReviewID"
    request.input('ReviewContent', sql.VarChar, ReviewContent); // Updated key to "ReviewContent"

    // Execute the query
    await request.query(query);

    res.status(200).json({ message: 'Review content updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the review content' });
    console.error('An error occurred while updating the review content:', error);
  } finally {
    // Close the connection pool
    sql.close();
  }
};


