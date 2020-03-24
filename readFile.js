const fs = require("fs")

fs.readFile("./assets/alex.jpg",  (err, img) =>{
    console.log("File contents read")
    console.log(img)
})

