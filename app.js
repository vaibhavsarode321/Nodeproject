
const express = require('express');

const app = express();

const http = require('http');

const bodyParser = require('body-parser');

const routes = require('./routers/admin.js')

const mongoconnect = require('./utills/database')


    // Middleware's


app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use('/' ,  routes );

app.use('/',(req,res,next)=>{
    
    res.send("This is the homepage");
    next();
})


app.use(express.static(__dirname + '/views'));




// connection part 

http.createServer(app);

mongoconnect
.then(connection =>{

    console.log('successfully connected');

})


const port = 9000;

app.listen(port , function(){

    console.log('server is listning on the port '  + port )
})