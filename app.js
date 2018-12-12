var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Welcome to TTHouse');
}).listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');
