var express=require('express');
var logger=require('morgan');
var cors=require('cors');
var expressValidator=require('express-validator');

var app=express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(expressValidator());


var grades=[];
app.get('/grades',function(req,res){
    res.json(grades);
});

app.get('/grades/:id',function(req,res){
  
    let id=req.params.id;
    let i=find(id);
    if(i>=0)
    {
      res.json(grades[i]);
    }
        
    else
      res.end();
  });

app.post('/grades/add',function(req,res)
{
    let grade=req.body;
    if(grade)
    {
        let errors=checkValidity(req);
        if(errors)
        {
            console.log(errors);
        }
        else
        {
        grades.push(grade);
        res.json(grade);
        }
    }
    res.end();
});

app.put('/grades/update/:id',function(req,res){
    let id=req.params.id;
    let i=find(id);
    let grade=req.body;
    if(grade)
    {
        let errors=checkValidity(req);
        if(errors)
        {
            console.log(errors);
        }
        else
        {
        if(i>=0)
        {
            grades[i]=grade;
        }
        else
        {
            grades.push(grade);            
        }
        res.json(grade);
        }
    }
    res.end();
   
});
app.delete('/grades/delete/:id',function(req,res){
    let id=req.params.id;
    let i=find(id);
    if(i>=0)
    {
      let grade=grades[i];
      grades.splice(i,1);
      res.json(grade);
    }
    res.end();
  });

function find(id)
{
   for(let i=0;i<grades.length;i++)
  {
    if(id==grades[i].id)
    return i;
  }
 return -1;
}
function checkValidity(req)
{
    req.checkBody("id","Enter a valid ID").isNumeric();
    req.checkBody("name","Name must be provided").notEmpty();
    req.checkBody("course","Course Name must be provided").notEmpty();
    req.checkBody("grade","Grade is not a valid number").isNumeric();
    return req.validationErrors();
}


app.listen(9000);