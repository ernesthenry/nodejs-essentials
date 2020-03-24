const fs = require("fs")

// Read contents of a file 

fs.readdirSync('./assets', (err, files) =>{    // this function executes asynchronously
    if(err){
        throw err;
    }
  console.log('complete');
  console.log(files)

}) 


console.log('Started reading files');
