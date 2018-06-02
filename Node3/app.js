const Rx=require('rxjs/Rx');
const subject = new Rx.Subject();
const url=require('url');
const {fork} = require('child_process');

function processFile(webObject)
{
    var res=webObject.res;
    var query=url.parse(webObject.req.url,true);
    var path=query.query.path.toString();
    console.log(path);
    const childProcess = fork('fileOperation.js');
    childProcess.send(path);
    childProcess.on('message',data=>
    {
            res.end(data);
                
    });
    
}
subject.subscribe(processFile);
const http=require('http');
http.createServer((req,res)=>{
    subject.next({req:req,res:res});
}).listen(8000);