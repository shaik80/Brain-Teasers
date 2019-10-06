const express = require('express');
let router = express();
const mongoose = require('mongoose');
let Question = mongoose.model('Question');

router.get('/',(req,res) =>{
    res.redirect("question/index")
});



router.post('/instruction',(req,res) =>{
    res.render("question/instruction")
});

router.post('/info',(req,res) =>{
    res.render("question/info")
});

router.get('/question',(req,res) =>{
    res.render("question/question")
});

router.get('/addoredit',(req,res) =>{
    res.render('question/addoredit')
})

router.post('/list',(req,res) =>{
    let question =new Question()
    question.Question = req.body.Question;
    question.Opt1 = req.body.Opt1;
    question.Opt2 = req.body.Opt2;
    question.Opt3 = req.body.Opt3;
    question.Opt4 = req.body.Opt4;
    question.Answer = req.body.Answer;
    question.save((err,doc) => {
        if(!err){
            res.redirect('/list');
        }
        else{
            if(err.name == 'ValidationError'){
                handleerror(err,req.body)     
            }
            else
            {
                console.log("error during insertion"+err)
            }
        }
    })
})



router.get('/list',(req,res) =>{
    // res.json("form list")
    Question.find((err,docs) =>{
        if(!err){
            res.render("question/list",{
                list:docs
            })
        }
        else{
            console.log('error' + err)
        }
    })
});

router.get('/delete/:id',(req,res) => {
    Question.findByIdAndDelete(req.params.id,(err,docs) =>{
        if(!err){
            res.redirect('/list');
        }
    })
})

router.get('/questions',async (req,res)=>{
    try{
        const ques = await Question.find();
        res.json(ques) 
    }
    catch(err){
        res.json(err)
    }
});


module.exports = router; 