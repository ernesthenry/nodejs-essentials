const fs = require("fs");

fs.readdirSync('./storage').forEach(fileName =>{
    fs.unlinkSync(`./storage/${fileName}`)
})


// remove directory
fs.rmdir("./storage", err =>{
    if(err){
        throw err
    };
    console.log("./storage directory removed");
} )

// rename directory from storage-files to storage synchronously
fs.renameSync("./storage-files", "./storage")

