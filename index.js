const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {

    const file = url.parse(req.url, true);
    let filename = "." + file.pathname + ".html";
    if (filename === './.html') {filename = './index.html'}

    fs.readFile(filename, (err, data) => {
        if (err) {
            fs.readFile(__dirname + "/404.html", (err, data) => {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write(data);
                res.end()
            })
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data);
            res.end();
        }
    })
}).listen(8080);