const fs = require("fs");
const { Transform } = require("stream");
const path = require("path");
const { EventEmitter } = require("events");
const errorEvents = new EventEmitter();
const newsletter = new EventEmitter();

errorEvents.on("error", handleError);

newsletter.on("signup", ({ contact, res }) => {
  let newsletterWrite = fs.createWriteStream(
    path.join(__dirname, "src", "contacts.csv"),
    {
      flags: "a",
    }
  );

  newsletterWrite.on("error", (err) => {
    errorEvents.emit("error", {
      err: {
        message: "Failed to add name or email to contact list.",
        status: 500,
      },
      res,
    });
  });

  newsletterWrite.write(`${contact.name},${contact.email}\n`);
});

function handleError({ err, res }) {
  res.writeHead(err.status, { "content-type": "application/json" });
  res.write(err.message);
  res.end();
}

function handleStaticAssets(url, res) {
  let type = "application/javascript";

  switch (path.extname(url)) {
    case ".css":
      type = "text/css";
      break;
    case ".png":
      type = "image/png";
      break;
    case ".jpeg":
      type = "image/jpeg";
      break;
    case ".jpg":
      type = "image/jpg";
      break;
    case ".gif":
      type = "image/gif";
      break;
    case ".txt":
      type = "text/html";
      break;
  }

  res.statusCode = 200;
  res.setHeader("content-type", type);

  const reportProgress = new Transform({
    transform(chunk, encoding, callback) {
      process.stdout.write("...");
      callback(null, chunk);
    },
  });

  fs.createReadStream(path.join(__dirname, "src" + url))
    .on("error", (err) =>
      errorEvents.emit("error", {
        err: { message: "Can't send static asset", status: 404 },
        res,
      })
    )
    .pipe(reportProgress)
    .pipe(res);
}

class Route {
  constructor(endpoint, method, file, status = 200, type = "text/html") {
    this.endpoint = endpoint;
    this.method = method;
    this.filePath = file;
    this.statusCode = status;
    this.type = type;
  }

  handleResponse(res) {
    fs.readFile(path.join(__dirname, "src", this.filePath), (err, contents) => {
      if (err) {
        console.error(err);
        errorEvents.emit("error", {
          err: { message: "Can't send page", status: 500 },
          res,
        });
      }

      res.statusCode = this.statusCode;
      res.setHeader("content-type", this.type);
      res.write(contents);
      res.end();
    });
  }
}

class POSTRoute extends Route {
  handleResponse(res, reqBody) {
    if (this.endpoint + this.method == "/newsletterPOST") {
      newsletter.emit("signup", { contact: reqBody, res });
    }

    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify({ msg: "Successfully received POST data." }));
    res.end();
  }
}

const routes = {
  "/GET": new Route("/", "GET", "index.html"),
  "/aboutGET": new Route("/about", "GET", "about.html"),
  "/newsletterGET": new Route("/newsletter", "GET", "newsletter.html"),
  "/newsletterPOST": new POSTRoute("/newsletter", "POST", "newsletter.html"),
  "*": new Route("/", "GET", "notFound.html", 404),
};

module.exports = {
  routes,
  handleStaticAssets,
};
