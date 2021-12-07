const express = require("express");
const { readFile, writeFile } = require("fs");
const { join } = require("path");

let pokeFile = join(__dirname, "../src/pokemon.json");

const router = express.Router();

router.get("/pokemon/:id?", (req, res, next) => {
  try {
    let { id } = req.params;

    if (id) {
      if (isNaN(id)) throw new Error("Invalid pokemon id");

      readFile(pokeFile, (err, data) => {
        if (err) return next(e);

        let pokemon = JSON.parse(data.toString()).pokemon.filter(
          (poke) => poke.id == id
        );
        res.json(pokemon);
      });
    } else {
      res.sendFile(pokeFile);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/pokemon", (req, res, next) => {
  try {
    let newPokemon = req.body;

    console.log(newPokemon);

    readFile(pokeFile, (err, data) => {
      if (err) return next(e);

      try {
        let newPokemonList = [...JSON.parse(data.toString())];

        let newId = newPokemonList[newPokemonList.length - 1].id + 1;
        newPokemon.id = newId;
        newPokemon.num = newId.toString().padStart(3, "0");

        newPokemonList.push(newPokemon);

        writeFile(pokeFile, JSON.stringify(newPokemonList), (err) => {
          if (err) return next(e);

          res.json({ msg: `Successfully added ${newPokemon.name} pokemon` });
        });
      } catch (e) {
        next(e);
      }
    });
  } catch (e) {
    next(e);
  }
});

router.put("/pokemon/:id", (req, res, next) => {
  try {
    let { id } = req.params;
    let newDetails = req.body;

    if (isNaN(id)) {
      throw new Error("Invalid pokemon ID");
    } else {
      readFile(pokeFile, (err, data) => {
        if (err) return next(e);

        try {
          let newPokemonList = JSON.parse(data.toString()).map((poke) => {
            if (poke.id == id) {
              return { ...poke, ...newDetails };
            }

            return poke;
          });

          writeFile(pokeFile, JSON.stringify(newPokemonList), (err) => {
            if (err) return next(e);

            res.json({
              msg: `Successfully updated pokemon with id of ${id}`,
            });
          });
        } catch (e) {
          next(e);
        }
      });
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/pokemon/:id", (req, res, next) => {
  try {
    let { id } = req.params;

    if (isNaN(id)) {
      throw new Error("Invalid pokemon ID");
    } else {
      readFile(pokeFile, (err, data) => {
        if (err) return next(e);

        try {
          let newPokemonList = JSON.parse(data.toString()).filter(
            (poke) => poke.id != id
          );

          writeFile(pokeFile, JSON.stringify(newPokemonList), (err) => {
            if (err) return next(e);

            res.json({
              msg: `Successfully deleted pokemon with id of ${id}`,
            });
          });
        } catch (e) {
          next(e);
        }
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
