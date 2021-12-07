const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "src/index.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/add", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "src/addPokemon.html"));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
