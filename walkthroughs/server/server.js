const { createServer } = require("http");
const { EventEmitter } = require("events");
const { appendFile, readFile, existsSync } = require("fs");
const { join, extname } = require("path");

const logger = new EventEmitter();

const port = 3001;

logger.on("new_request", ({ endpoint, method, status }) => {
  let log = `${endpoint}\t${method}\t${status}\t${new Date().toLocaleTimeString()}`;
  console.log(log);
  appendFile("./logs.txt", log + "\n", (err) => {
    if (err) console.error(err);
  });
});

createServer((request, response) => {
  let type;
  let ext = extname(request.url);

  switch (ext) {
    case ".png":
      type = "image/png";
      break;
    case ".js":
      type = "application/javascript";
      break;
    case ".css":
      type = "text/css";
      break;
    default:
      type = "text/html";
  }

  if (ext) {
    let filePath = join(__dirname, "assets" + request.url);

    let fileFound = existsSync(filePath);

    if (!fileFound) {
      response.writeHead(404, { "content-type": type });
      response.write("Couldn't find asset");
      return response.end();
    }

    readFile(filePath, (err, contents) => {
      if (err) {
        console.error(err);
      }

      response.writeHead(200, { "content-type": type });
      response.write(contents);
      response.end();
    });
  } else {
    response.writeHead(200, { "content-type": type });
    response.write(
      "<html><head><link href='styles.css'></head><body><img alt='Test image' src='logo.png'></body></html>"
    );
    response.end();
  }

  logger.emit("new_request", {
    endpoint: request.url,
    method: request.method,
    status: response.statusCode,
  });
}).listen(port, () => console.log("Server running on port: " + port));
