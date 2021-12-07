const query = require("../model");

const getAllProducts = async () => {
  return query("SELECT * FROM products");
};

const getProductById = async (id) => {
  return query("SELECT * FROM products WHERE ProductId = ?", [id]);
};

const getProductByName = async (name) => {
  return query(`SELECT * FROM Products WHERE Name LIKE ?`, [`%${name}%`]);
};

const createNewProduct = (async = (product) => {
  return query("INSERT INTO products SET ?", [product]);
});

const updateExistingProduct = async (id, product) => {
  return query("UPDATE products SET ? WHERE ProductId = ?", [product, id]);
};

const deleteExistingProduct = async (id) => {
  return query("DELETE FROM products WHERE ProductId = ?", [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByName,
  createNewProduct,
  updateExistingProduct,
  deleteExistingProduct,
};
