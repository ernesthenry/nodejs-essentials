const fs = require("fs")


// synchronous version of renaming files
fs.renameSync('./assets/colors.json', './assets/colorData.json')  


// we can also use the rename function to move files for the asynchronous version
fs.rename('./assets/notes.md', './storage-files/notes.md', err => {
    if(err){
        throw err;
    }
});

// Delete alex.jpg file with unlink() after 4 seconds
setTimeout(() =>{
    fs.unlinkSync('./assets/alex.jpg');
}, 4000)