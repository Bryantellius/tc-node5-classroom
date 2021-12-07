const products = require("../db/queries/products");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let { name } = req.query;
    let data;

    if (name) {
      data = await products.getProductByName(name);
    } else {
      data = await products.getAllProducts();
    }

    res.json(data.length == 0 ? { msg: "No product results" } : data);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;

    if (isNaN(id)) throw new Error("Invalid ProductId");

    let data = await products.getProductById(id);
    res.json(
      data.length == 0
        ? { msg: "No results match the given id of " + id }
        : data
    );
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let product = req.body;

    let result = await products.createNewProduct(product);

    res.json({ msg: `Successfully added product`, id: result.insertId });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let product = req.body;
    let { id } = req.params;

    let result = await products.updateExistingProduct(id, product);

    res.json({ msg: "Successfully updated product", id });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;

    let result = await products.deleteExistingProduct(id);

    res.json({ msg: "Successfully deleted product", id });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
