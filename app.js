// const name = require('./myModule')

// console.log(name)

const counter = require('./myModule')

counter.inc()
counter.inc()
counter.inc()

console.log(counter.getCount())