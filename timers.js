const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ........${p}%`)
 }
console.log(`waiting ${currentTime/1000} seconds`);


console.log(`Setting a ${waitTime/1000} second delay`)

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); // clear the line
    process.stdout.cursorTo(0); // move the cursor back to 0
    console.log('done')
}

const interval = setInterval(incrementTime, waitInterval)

setTimeout(timerFinished, waitTime)

