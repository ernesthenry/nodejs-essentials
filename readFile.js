const fs = require("fs")

fs.readFile("./assets/Readme.md", "UTF-8", (err, text) =>{
    console.log("File contents read")
    console.log(text)
})

