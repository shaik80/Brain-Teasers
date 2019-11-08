const express = require('express');
let router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const {ensureAuthenticated} = require('../helpers/auth');

router.post('/question', ensureAuthenticated,  (req,res) =>{
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


router.get('/score', ensureAuthenticated,  (req,res) =>{
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



router.get('/login',(req,res) =>{
    res.render("user/login")
});

router.get('/register',(req,res) =>{
    res.render("user/register")
});

// Register form post
router.post('/register', (req,res) =>{
    let errors = [];
    if(req.body.password != req.body.confirmpassword){
        errors.push({text:'Password do not match'})
    }
    if(req.body.password.length < 6){
        errors.push({text:'Password must be at least 6 characters'})
    }
    if(errors.length > 0){
        res.render('user/register',{
            errors : errors,
            user: req.body.user,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        });
    }
    else{
        User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                req.flash('error_msg','Emai already registered')
                res.redirect('login')

            }else{

                const newuser = new User({
                    user: req.body.user,
                    email: req.body.email,
                    password: req.body.password
                })
                // console.log(newuser);
                bcrypt.genSalt(10, (err, salt) =>{
                    bcrypt.hash(newuser.password, salt, (err,hash)=>{
                        if(err) throw err;
                        newuser.password = hash
                        newuser.save()
                            .then(user => {
                                req.flash('success_msg','You are now register now login')
                                res.redirect('/login')
                            })
                            .catch(err =>{
                                console.log(err);
                                return;
                            });
                    })
                })

            }
        })

        
    }
})


router.post('/login',(req,res,next) => {
    passport.authenticate('local', {
        successRedirect:'/',
        failureRedirect:'/login',
        failureFlash:true
    })(req,res,next);
})


module.exports = router; 