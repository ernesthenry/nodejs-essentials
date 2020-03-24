const fs = require("fs")

const text = fs.readFileSync("./assets/Readme.md", "UTF-8")

console.log(text)