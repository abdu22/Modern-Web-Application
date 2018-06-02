const fs=require('fs');
process.on('message',(queryPath)=>
{
    var readStream=fs.createReadStream(__dirname+"/"+queryPath);
    readStream.on('data',function(chunkdata)
    {
         process.send(chunkdata.toString());

    })
    .on('end',function(){
    })
})
