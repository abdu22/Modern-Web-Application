const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

MongoClient.connect('mongodb://localhost:27017/homework7', (err, client)=>{
  if(err){
      console.log('Unable to connect MongoDB server');
  }
     console.log('Connected to MongoDB server');
     
     const db = client.db('homework7');
     db.collection('homework7').findOne({},(err,result) => {
         if(err) throw err;

         console.dir(result);
         var encrypted = result.message;
         var decrypted = decipher.update(encrypted, 'hex', 'utf8');
         decrypted += decipher.final('utf8');
         console.log(decrypted); 

     });

     client.close();
});