const { createServer } = require("http");
const { createReadStream } = require("fs");
const path = require("path");

const port = 3000;

let server = createServer((req, res) => {
  const { url, method } = req;
  let filePath = "notFound.html";
  let status = 404;

  if (url == "/" && method == "GET") {
    filePath = "index.html";
    status = 200;
  }

  res.statusCode = status;
  res.setHeader("content-type", "text/html");
  createReadStream(path.join(__dirname, "public", filePath))
    .on("error", (err) => {
      console.error(err);
      res.statusCode = 500;
      res.write(JSON.stringify({ msg: "Server error" }));
      res.end();
    })
    .pipe(res);
});

server.listen(port, () => console.log("Server running on port: " + port));
