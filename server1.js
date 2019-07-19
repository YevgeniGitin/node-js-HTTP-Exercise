let http = require('http');
let flag = false;
module.exports = function init() {

    http.Server((req, res) => {
        sleep(2000);
        res.writeHead(200);
        console.log("in server");
        res.end('done\n');
    }).listen(8001);


}

function sleep(ms) { // node.js >= 9.3 → blocks event loop
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}