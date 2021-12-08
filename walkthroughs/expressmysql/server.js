const express = require("express");
const morgan = require("morgan");
const config = require("./config");
const router = require("./routes");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/", router);

app.use((req, res, next) => {
  try {
    res.status(404).send("404 Not Found");
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  try {
    res
      .status(err.status || 500)
      .json({ name: err.name || "Unknown", msg: err.message || "No message" });
  } catch (e) {
    next(e);
  }
});

app.listen(config.port, () =>
  console.log("Server running on port " + config.port)
);
