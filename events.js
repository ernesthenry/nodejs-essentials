const events = require('events')

const emitter = new events.EventEmitter()

// Event emitter gives us a way to raise and handle custom events that we can wire listeners to the on() function
// event emitter is asynchronous

emitter.on("customEvent", (message, user) =>{
    console.log(`${user}: ${message}`)
})

process.stdin.on("data", data =>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "Good bye", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal")
}) 