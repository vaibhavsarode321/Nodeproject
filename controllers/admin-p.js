
const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
const loginpost = require('../models/login.js');

 
 module.exports.post = (req,res,next)=>{
    
    var username = req.body.username;
    var passward = req.body.passward; 
    
    var logindata = new loginpost({ username : username ,passward : passward})
    

        logindata
        .save()
        .then(data => {

            res.json(data);
           
        })
        .catch(error=>{
            res.json( error );
        })
            
    }
    /*
    const username = req.body.username ;
    const passward = req.body.passward ;

    const logindata = new loginpost({

        Username : username ,
        Passward : passward
    })

    logindata
    .save()
    .then ( data =>{

        res.json('data');
    })
    .catch(error=>{

        res.send('error in post request' + error);
    })

    */









 module.exports.admins =  (req,res,next)=>{
        
    // res.send('this is the admin.js file ');
     
     res.writeHead(200 , {'content-Type':'text/html'});
     fs.readFile('./views/login.html',function(error,data){

        
         if (error) {
             res.status(404).send('Sorry, cant find that');
            
         } else {

             res.write(data);
            
         }  
         res.end();         

     })

 }
