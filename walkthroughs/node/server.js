console.log("Node is the 💣");

const { createServer } = require("http");

let server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("Hello World!");
  res.end();
});

server.listen(8080, () => {
  console.log("Server listening on port 8080...");
});
