
let http = require('http');
let flag=false;
module.exports=function init(){
    return new Promise((resolve, reject) => {
        http.Server((req, res) => {
            sleep(2000);
            console.log("in server");
            res.writeHead(200);
            res.end('end');
            }).listen(8001);
        resolve("true");
    }) 
}

function sleep(ms) { // node.js >= 9.3 → blocks event loop
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
    }