const events = require('events')

const emitter = new events.EventEmitter()

emitter.on("customEvent", (message, user) =>{
    console.log(`${user}: ${message}`)
})

emitter.emit("customEvent", "Hello world", "Computer")
emitter.emit("customEvent", "How are you doing?", "Ernest Henry")