$(function(){
    // data in attributes
    // getAttributeData()
    getJSON()
    // getLocalData()
 })
 function getJSON(){
    $.getJSON('js/ques.json',function(json){
        questions = json;
        // console.log(Object)
        const keys = Object.keys(questions)
        // console.log(keys.length);
        let randIndex = Math.floor(Math.random()*(keys.length))
        console.log(randIndex);
        localStorage.setItem("lastname", questions.q1);
    })
 }