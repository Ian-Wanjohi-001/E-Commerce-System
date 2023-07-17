import config from "../database/config.js";
import sql from "mssql";

export const getProducts = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    let result = await pool.request().query("SELECT * FROM Products");
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching products." });
    console.error("An error occurred while fetching products:", error);
  } finally {
    sql.close();
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const pool = await sql.connect(config.sql);
    const query = `SELECT * FROM Products 
                   JOIN Categories ON Products.CategoryID = Categories.CategoryID
                   WHERE Categories.CategoryName LIKE '%${category}%'`;
    const result = await pool.request().query(query);

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching products by category." });
    console.error("An error occurred while fetching products by category:", error);
  } finally {
    sql.close();
  }
};

export const getProductsByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const pool = await sql.connect(config.sql);
    const query = `SELECT * FROM Products WHERE ProductName LIKE '%${title}%'`;
    const result = await pool.request().query(query);

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching products by title." });
    console.error("An error occurred while fetching products by title:", error);
  } finally {
    sql.close();
  }
};

export const getProductCategories = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    let result = await pool.request().query("SELECT * FROM Categories");
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching product categories." });
    console.error("An error occurred while fetching product categories:", error);
  } finally {
    sql.close();
  }
};
