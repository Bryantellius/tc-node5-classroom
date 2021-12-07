const express = require("express");

let users = [
  {
    id: 1,
    name: "Ben",
    city: "Birmingham",
  },
  {
    id: 2,
    name: "Tanner",
    city: "Birmingham",
  },
];

class CredentialError extends Error {
  constructor(message) {
    super(message);

    this.name = "CredentialError"
    this.status = 401;
  }
}

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  try {
    res.send("Hello World");
  } catch (error) {
    next(error);
  }
});

app.get("/about", (req, res, next) => {
  try {
    res.send("About");
  } catch (error) {
    next(error);
  }
});

app.post("/signin", (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (email == "test@test.com" && password == "password") {
      res.redirect("/");
    } else {
      throw new CredentialError("Invalid login credentials");
    }
  } catch (error) {
    next(error);
  }
});

app.put("/user/:id", (req, res, next) => {
  try {
    let userUpdates = req.body;
    let { id } = req.params;

    if (!isNaN(parseInt(id))) {
      users = users.map((user) => {
        if (user.id == id) {
          userUpdates = { ...user, ...userUpdates };
          return userUpdates;
        }

        return user;
      });

      res.json({ msg: "User updated!", user: userUpdates });
    } else {
      throw new Error("Invalid ID value");
    }
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    name: err.name || "Unknown",
    msg: err.message || "An unexpected error occurred",
  });
});

app.listen(8080, () => console.log("Server listening on port 8080..."));
