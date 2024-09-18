import * as http from 'http';
import * as fs from 'fs';

const server = http.createServer((req,res) => {
    if(req.url === '/home') {
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end("Sam is cool")
    }
});




const port = 3000;
server.listen(port,"127.0.0.1");
console.log(`Server is currently listening on port ${port}`);