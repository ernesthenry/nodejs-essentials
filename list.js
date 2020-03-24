const fs = require("fs")

// Read contents of a file 

console.log('Started reading files');
const files = fs.readdirSync('./assets') // this function executes synchronously
console.log('complete');

console.log(files)