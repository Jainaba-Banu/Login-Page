const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require("body-parser")
const port = 8004;
const session = require("express-session")
const{v4:uuidv4}=require("uuid");
const router = require("./router");


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');
//load static assets
app.use('/static',express.static(path.join(__dirname,'views/public')));
app.use('/assets',express.static(path.join(__dirname,'views/public/assets')))

// const sessionSecret = uuidv4();

app.use(session({
    secret:uuidv4(), //this method make this session completly secrete and unique
    resave : false,
    saveUninitialized : true
}));

app.use('/route',router);

//home route
app.get('/',(req,res)=>{
    res.render("base",{title:"Login System"});
})

app.listen(port,function(){
console.log(`App listening on port: ${port}`);
})


