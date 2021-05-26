var express=require('express');
var ejs=require('ejs');

var app=express();


app.set('view engine','ejs');
 
app.get('/',function(req,res){
    var userdetails={
        name:'varun',
        email:'varun@gmail.com'

    }
    res.render('../pages/home',{data:userdetails})
    
})
app.listen(3000);
