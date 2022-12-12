// Express method

const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, () => {console.log(`Server is running on localhost port ${port}.`)});

// Plain Node method

// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// http.createServer((req, res) => {

//     const file = url.parse(req.url, true);
//     let filename = "." + file.pathname + ".html";
//     if (filename === './.html') {filename = './index.html'}

//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             fs.readFile(__dirname + "/404.html", (err, data) => {
//                 res.writeHead(404, {'Content-Type': 'text/html'})
//                 res.write(data);
//                 res.end()
//             })
//         } else {
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.end(data);
//             res.end();
//         }
//     })
// }).listen(8080);