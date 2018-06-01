const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    // Using Synchronous reading 
    /* const readFile = fs.readFileSync('./bigImg.jpg');

    res.end(readFile); */

    //Using async reading 
    /* fs.readFile('./bigImg.jpg', function (error,data){
          if(error) res.end("error");
          else 
           res.end(data);
    }); */
    //Using async reading and streaming
    const srcFile = fs.createReadStream('./bigImg.jpg');
    srcFile.pipe(res);
});

server.listen(8000);
