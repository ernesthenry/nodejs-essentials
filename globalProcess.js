// console.log(process.pid) // outputs process of node
// console.log(process.versions.node) // version of node for the current process
// console.log(process.argv)

// const [, , firstName, lastName] = process.argv

// console.log(`My name is ${firstName} ${lastName}`)

// process.argv module
// The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed.
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")
console.log(`${greeting} ${user}`)