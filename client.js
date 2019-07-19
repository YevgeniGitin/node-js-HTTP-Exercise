let http = require('http');
module.exports = async function clientrequest() {
    for (let i = 1; i <= 10; i++) {
        http.get('http://localhost:8001', resp => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                console.log('Response ' + i + ' is ' + data);
            });
        });
    }
}