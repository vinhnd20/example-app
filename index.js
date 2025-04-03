const http = require('http');
const fs = require('fs');

const config = fs.readFileSync('config.yaml', 'utf8');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Config loaded: ${config}\nServer is running!\n`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Config loaded: ${config}`);
});
