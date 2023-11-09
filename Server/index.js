const fs = require('fs');
const fsPromises = require('fs').promises;
const http = require('http');

console.log("------- START -------");

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log("Server is starting..."));



