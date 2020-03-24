const fs = require("fs")

fs.readFile("./assets/alex.jpg",  (err, img) =>{
    if (err){
        console.log(`Error has ocurred ${err.message}`)
        process.exit()
    }
    console.log("File contents read")
    console.log(img)
})

