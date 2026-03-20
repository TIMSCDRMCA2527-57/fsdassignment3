const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) =>{
    if (req.url === "/"){
        fs.readFile("index.html",(err,data) => {
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/about"){
        fs.readFile("about.html",(err,data) => {
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/contact"){
        fs.readFile("contact.html",(err,data) => {
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
});

server.listen(5000 , () => {
    console.log("Server running at http://localhost:5000/");
});