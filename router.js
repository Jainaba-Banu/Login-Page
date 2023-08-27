var express = require("express");
var router = require('express').Router();

const credential={
    email:"jainababanu@gmail.com",
    password:"jainaba123"
}
//login user
router.post('/login',(req,res)=>{
if(req.body.email==credential.email && req.body.password==credential.password){//we have the successful login
    req.session.user = req.body.email;//we want to create a new seccion within username session variable
    res.redirect('/route/dashboard');//redirect to the dashboard
    //res.end("Login Successfull...!");
}else{
    res.send("Invalid Username");
}
})

//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user,title:'Dashboard'});
    }else{
        res.send("Unauthorized User");
    }
})

//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
if(err){
    console.log(err);
    res.send('Error');
}else{
    res.render('base',{title:"Express",logout:"logout Successfully...!"});
    
}
    })
})


module.exports = router;