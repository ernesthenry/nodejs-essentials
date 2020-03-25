const cp = require("child_process")

cp.exec("open http://www.linkedin.com/learning") // open link to linkedin learning

cp.exec("open -a Terminal .") // open terminal

cp.exec("ls", (err, data)=>{   // list files in the directory
    if(err){
        throw err;
    }
    console.log(data);
})

cp.exec("lst", (err, data, stderr)=>{
    console.log(data);
})

cp.exec("node readStream", (err, data, stderr )=>{
    console.log(data);
})


