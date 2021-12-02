console.log("Node is the 💣");

const { createServer } = require("http");

class ResponseBodyError extends Error {}

let server = createServer((req, res) => {
  const { url, method } = req;

  let data;
  let chunks = [];

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  req.on("error", (err) => {
    console.error(err);
    res.statusCode = 400;
    res.write("<h1>Bad Request >:(</h1>");
    res.end();
  });

  res.on("error", (err) => {
    console.error(err);
    res.statusCode = 500;

    if (err instanceof ResponseBodyError) {
      res.write(`<h1>${err.message}</h1>`);
    } else {
      res.write("<h1>Server error, try again later...</h1>");
    }

    res.end();
  });

  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", () => {
    try {
      const reqBody = Buffer.concat(chunks).toString();

      switch (url + method) {
        case "/GET":
          data = "<h1>Home</h1><a href='/newsletter'>Newsletter</a>";
          break;
        case "/newsletterGET":
          data = "<h1>Newsletter</h1><a href='/'>Home</a>";
          break;
        case "/echoPOST":
          res.setHeader("Content-Type", "application/json");
          try {
            data = JSON.stringify({
              msg: "OK from the server",
              ...JSON.parse(reqBody),
            });
          } catch (error) {
            res.emit("error", error);
          }
          break;
        default:
          res.statusCode = 404;
          data =
            "<h1>Turn Back! This page doesn't exist.</h1><a href='/'>This may be what you're looking for...</a>";
      }

      res.write(data);
      res.end();
    } catch (error) {
      res.emit(
        "error",
        new ResponseBodyError("Failed to send requested data.")
      );
    }

    console.log(
      `${url}\t${method}\t${res.statusCode}\t${new Date().toLocaleTimeString()}`
    );
  });
});

server.listen(8080, () => {
  console.log("Server listening on port 8080...");
});
