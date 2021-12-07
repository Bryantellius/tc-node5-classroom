const express = require("express");
const morgan = require("morgan");
const { join } = require("path");
const router = require("./routes");

const port = 3001;
const app = express();

app.use(morgan("dev"));

app.use(express.static(join(__dirname, "src")));
app.use(express.json());

app.use(router);

app.use((req, res, next) => {
  try {
    res.status(404).sendFile(join(__dirname, "src/notFound.html"));
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  // handle errors
  res.status(err.status || 500).json({
    name: err.name || "Unknown",
    msg: err.message || "An unexpected error has occurred.",
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
