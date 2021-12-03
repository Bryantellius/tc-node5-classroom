console.log("Node is the 💣\n");

const http = require("http");
const routes = require("./routes");
const port = 8080;

function requestHandler(req, res) {
  let { url, method } = req;

  const chunks = [];

  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", () => {
    let reqBody = Buffer.concat(chunks).toString();

    try {
      reqBody = JSON.parse(reqBody);
    } catch (err) {
      let reqBodyObj = {};
      let searchParams = new URLSearchParams(reqBody);
      for (let prop of searchParams.keys()) {
        reqBodyObj[prop] = searchParams.get(prop);
      }
      reqBody = reqBodyObj;
    }

    let route = routes[url + method] || routes["*"];

    res.statusCode = route.statusCode;
    res.setHeader("content-type", route.type);
    res.write(route.body(reqBody));
    res.end();
  });
}

http
  .createServer(requestHandler)
  .listen(port, () => console.log("Server listening on port: " + port));
