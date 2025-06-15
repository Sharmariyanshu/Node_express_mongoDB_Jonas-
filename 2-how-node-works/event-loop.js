const fs = require('fs'); // File system
const crypto = require("crypto"); //cryptography -> secure information
const start = Date.now(); // how many ms the code took to run
process.env.UV_THREADPOOL_SIZE = 10;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile('text-file-txt', () => {  //big file -> take some time to read & execute, that's why it will execute at last
    console.log("I/O finished"); 
    console.log("-------------"); // above this: the code is not running in event-loop while below this: the code is running in event-loop

    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
setImmediate(() => console.log("Immediate 2 finished"));

process.nextTick(() => console.log("Process.nextTick")) //nextTick is part of microtask which execute after the current operation completes, but before any I/O events or timers(like setTimeout, setImmediate)

crypto.pbkdf2Sync('password', "salt" , 100000, 1024, 'sha512');
console.log(Date.now() - start, "Password encrypted");

crypto.pbkdf2Sync('password', "salt" , 100000, 1024, 'sha512');
console.log(Date.now() - start, "Password encrypted");

crypto.pbkdf2Sync('password', "salt" , 100000, 1024, 'sha512');
console.log(Date.now() - start, "Password encrypted");

crypto.pbkdf2Sync('password', "salt" , 100000, 1024, 'sha512');
console.log(Date.now() - start, "Password encrypted");

});

console.log("Hello from the top-level code"); //1st step: to execute "top-model" code
