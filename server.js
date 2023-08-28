var http = require("http");
var fs = require("fs");


var server = http.createServer(function (req,res){

    if(req.url === '/'){
        res.writeHead(200,{"content-type": "text/html"});
        res.write('This is Home page');
        res.end();
    }
    else if(req.url === '/about'){
        res.writeHead(200,{"content-type": "text/html"});
        res.write('This is About page');
        res.end();
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{"content-type": "text/html"});
        res.write('This is contact page');
        res.end();
    }
    else if(req.url === '/file-write'){
        fs.writeFile("demo.txt","hello world",function (error){
            if(error){
                res.writeHead(200,{"content-type": "text/html"});
                res.write('file system fail');
                res.end();
            }
        })
    }

})

server.listen(3000);
console.log('server is ready to run');