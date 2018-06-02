const os=require('os');
const RX=require('rxjs/RX');

const promiseMemCheck=new Promise((resolve,reject)=>{
    const memSize=os.totalmem();
    if(memSize<4*1024*1024*1024)
        reject("Memory not sufficient");
    else
        resolve("Memory ok");
});
const promiseCpuCheck=new Promise((resolve,reject)=>{
    const cpuCores=os.cpus().length;
    if(cpuCores<2)
            reject("Processor not supported");
    else
            resolve("Cpu ok");
});
function checkSystem()
{
   console.log("Checking system ...");
   Promise.all([promiseMemCheck,promiseCpuCheck]).then((values)=>console.log("System successfully checked")).catch(
       (errors)=>console.error(errors));
}
function checkSystemNestedPromises()
{
    console.log("Checking system ...");
    promiseMemCheck.then(promiseCpuCheck).then((values)=>console.log("System successfully checked")).catch(
       (errors)=>console.error(errors));
}
function checkSystemObservable()
{
console.log("Checking system ...");
RX.Observable.create(observer=>{
    const memSize=os.totalmem();
    if(memSize<4*1024*1024*1024)
    {
        observer.error("Memory not sufficient");
        observer.complete();
    }
        
    const cpuCores=os.cpus().length;
    if(cpuCores<2)
    {
        observer.error("Processor not supported");
        observer.complete();
    }
    observer.next("System successfully checked");
    observer.complete();

}).subscribe(
    (message)=>console.log(message),
    (err)=>console.log(err)
)
}
checkSystem();
checkSystemNestedPromises();
checkSystemObservable();