const fs = require("fs");

const filePath = "HelloWorld.txt";
let data = "another one another one another one another one";

let example = fs
  .createWriteStream(filePath, { flags: "a" })
  .on("pipe", () => console.log("piping data"));

for (let i = 0; i < 1e6; i++) {
  example.write(data);
}

console.log("Large file generated :/");
