const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/question',(req,res) =>{
    let user =new User()
    user.user = req.body.user;
    user.score = req.body.score;
    user.save((err,doc) => {
        if(!err){
            res.render("question/question",{
                name:req.body.user,
            })
        }
        else{
           console.log("error during insertion"+err)
        }
    }) 
});


router.get('/score',(req,res) =>{
    User.find((err,docs) =>{
        if(!err){
            res.render("question/score",{
                list:docs
            })
        }
        else{
            console.log('error' + err)
        }
    })
});

module.exports = router; 