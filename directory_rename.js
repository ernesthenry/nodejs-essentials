const fs = require("fs");


// rename directory from storage-files to storage synchronously
fs.renameSync("./storage-files", "./storage")


// // remove directory

// fs.rmdir("./storage", err =>{
//     if(err){
//         throw err
//     };
// } )