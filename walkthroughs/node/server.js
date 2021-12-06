console.log("Node is the 💣\n");

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { createWriteStream, readFile } = require("fs");
const port = 8080;

const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "src")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "src", "index.html"));
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Failed to read file" });
  }
});

app.get("/about", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "src", "about.html"));
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Failed to read file" });
  }
});

app.get("/newsletter", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "src", "newsletter.html"));
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Failed to read file" });
  }
});

app.post("/newsletter", (req, res) => {
  try {
    let contact = req.body;

    let newsletterWrite = createWriteStream(
      path.join(__dirname, "src", "contacts.csv"),
      {
        flags: "a",
      }
    );

    newsletterWrite.write(`${contact.name},${contact.email}\n`);

    res.json({ msg: "Successfully signed up for newsletter!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Failed to add name to contact list" });
  }
});

app.get("/pokemon/:id", (req, res) => {
  try {
    let { id } = req.params;

    if (id) {
      readFile(path.join(__dirname, "src/pokemon.json"), (err, data) => {
        if (err) throw err;

        let pokemon;

        JSON.parse(data).pokemon.forEach((p, idx, arr) => {
          if (p.id == id) {
            return (pokemon = p);
          }
        });

        if (pokemon) res.json(pokemon);
        else res.status(500).json({ msg: "No such pokemon." });
      });
    } else {
      throw new Error("Invalid query parameter");
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ msg: e.message || "Failed to read from newsletter." });
  }
});

app.listen(port, () => console.log("Server listening on port: " + port));
