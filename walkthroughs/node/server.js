console.log("Node is the 💣\n");

const http = require("http");
const path = require("path");
const { routes, handleStaticAssets } = require("./utils");
const port = 8080;

function requestHandler(req, res) {
  let { url, method } = req;

  if (path.extname(url)) {
    handleStaticAssets(res);
  } else {
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
      route.handleResponse(res, reqBody);
    });
  }
}

http
  .createServer(requestHandler)
  .listen(port, () => console.log("Server listening on port: " + port));
