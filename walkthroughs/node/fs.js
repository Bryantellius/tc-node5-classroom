const fs = require("fs");

const filePath = "HelloWorld.txt";

fs.unlink("Copy" + filePath, (err) => {
  if (err) return console.error(err);

  console.log("Deleted file.");
});
