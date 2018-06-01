const zlib=require('zlib');
const path=require('path');
const fs= require('fs');

const gzip = (filePath,dstPath)=> {
    var readSt=fs.createReadStream(filePath);
    var writeSt=fs.createWriteStream(dstPath);
    readSt.pipe(zlib.createGzip()).pipe(writeSt).on('finish',function(){
        console.log("done");})
};

const gunzip = (filePath,dstPath)=> {
    var readSt=fs.createReadStream(filePath);
    var writeSt=fs.createWriteStream(dstPath);
    readSt.pipe(zlib.createGunzip()).on('error',function(error){console.log(error);}).pipe(writeSt).on('finish',
    function(){console.log('done');});
};

gzip(__dirname+'/bigfile.txt',__dirname+'/bigfile.txt.gz');
gunzip(__dirname+'/bigfile2.txt.gz',__dirname+'/bigfile2.txt');