const express = require('express');                                    //importing the server
const port = process.env.PORT || 8000;                                 //specifying the port on which server will run
const passport = require('passport');                                  //importing the passport middleware for node.js
const passportJwt = require('./config/passport-jwt-strategy');    
const db = require('./config/mongoose');                               //importing ODM Mongoose and accquiring the connection
const app = express();                                                 //launching the express server



app.listen(port,function(err){
    if(err){
    console.log('Error In Running The Server');
}
    console.log('Cool! Server Is Running On Port:', port);
});



app.use(express.urlencoded());                                         //importing the middleware provided by express   
app.use(express.static('./assets'));                                   //linking the static files with the server
app.set('view engine','ejs');                                          //setting up the view engine EJS
app.use('/',require('./routes/index'));                                //sending the / request to routes
