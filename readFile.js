const fs = require("fs")

fs.readFile("./assets/alex.jpg",  (err, img) =>{
    if (err){
        console.log(`Error has ocurred ${err}`)
    }
    console.log("File contents read")
    console.log(img)
})

