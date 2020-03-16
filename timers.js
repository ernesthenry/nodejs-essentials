const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime/1000} seconds`);
}


console.log(`Setting a ${waitTime/1000} second delay`)

const timerFinished = () => {
    clearInterval(interval)
    console.log('done')
}

const interval = setInterval(incrementTime, waitInterval)

setTimeout(timerFinished, waitTime)

