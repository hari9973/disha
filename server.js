var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var data = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
})

app.get('/teammembers.html', function (req, res) {
    var data = fs.readFileSync('teammembers.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
})

app.get('/login.html', function (req, res) {
    var data = fs.readFileSync('login.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
})

app.use('/static',express.static(__dirname + '/static'));

app.listen(8080);

/*http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);*/