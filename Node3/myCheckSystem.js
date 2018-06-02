const os=require('os');
const RX=require('rxjs/RX');

const promiseSystemCheck=new Promise((resolve,reject)=>{
    const memSize=os.totalmem();
    if(memSize<4*1024*1024*1024)
        reject("Memory not sufficient");
    const cpuCores=os.cpus().length;
        if(cpuCores<2)
            reject("Processor not supported");
    resolve("System is successfully checked");
})
function checkSystem()
{
    console.log("Checking system ...");
    promiseSystemCheck.then(function(value){
        console.log(value);
    }).catch(function(reason){console.log(reason);});
}

function checkSystemObservable()
{
    console.log("Checking system ...");
    RX.Observable.fromPromise(promiseSystemCheck).subscribe((status)=>console.log(status),(err)=>console.log(err));
}

checkSystem();
checkSystemObservable();