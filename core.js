const path = require("path");
// we can destructure some of the elements form these modules

const { log } = require('util')
const { getHeapStatistics } = require('v8')

log(v8.getHeapStatistics());
log(path.basename(__filename))

util.log(v8.getHeapStatistics());  // memory information


const util =require('util');
const v8 = require('v8')


util.log(path.basename(__filename));

util.log('  ^ The name of the current file'); // logs like console.log() but includes the date


const dirUploads = path.join(__dirname, "www", "files", "uploads")
console.log(dirUploads)