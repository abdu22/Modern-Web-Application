var dns = require('dns');
dns.resolve4('www.mum.edu',function(error,address){
    if(error) 
     console.log("error : ",error.message);
     else
     console.log(address);
});