let time =$("#time").html()
totalSeconds = 0;
let socre = 0;
let question = $("#question");
// var ul =document.getElementById("ul");
let ques_no = $("#ques_no");
let op1 =$("#op1");
let op2 =$("#op2");
let op3 =$("#op3");
let op4 =$("#op4");
let index = 1;
let app;
let step = ques_no.html(index);
let stoptime = setInterval(startTimer, 1000);
start(index);

function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);
    // $("#hour").html(hour);
    $("#min").html(minute);
    $("#sec").html(seconds);
    if($("#min").html() == 5 && $("#sec").html() == 0){
        clearInterval(stoptime);
        alert("time out");
        window.location.replace("../index.html");   
    }
  } 
function start(index){
    $.getJSON('js/ques.json',function(json){
        questions = json;
    Object.keys(questions).length;        
    
    // console.log("q"+index)
    $("#question").html(questions["q"+index].question);
    op1.html(questions["q"+index].options[0]);
    op2.html(questions["q"+index].options[1]);
    op3.html(questions["q"+index].options[2]);
    op4.html(questions["q"+index].options[3]);
})
}
$("#next").on('click', () => {    
    var a =parseInt(ques_no.html())+1
    ques_no.html(a)
    start(a);
    // console.log(a)
    if(a == 11)
    {
        window.location.replace("../index.html");
    }
})
$("#prev").on('click', () => {    
    
    var a =parseInt(ques_no.html())-1
    ques_no.html(a)
    start(a);
    if(a == 0)
    {
        window.location.replace("../index.html");
    }
    
})
function eventpointer(){
    $(".op1").css("pointerEvents" , "none");
    $(".op2").css("pointerEvents" , "none");
    $(".op3").css("pointerEvents" , "none");
    $(".op4").css("pointerEvents" , "none");
}
$(".op1").on('click', (v) => {
    $(".op1").css( "background-color","red" );
    $(".op2").css("pointerEvents" , "none");
    $(".op3").css("pointerEvents" , "none");
    $(".op4").css("pointerEvents" , "none");
})
$(".op2").on('click', (v) => {
    $(".op2").css( "background-color","red" );
    $(".op1").css("pointerEvents" , "none");
    $(".op3").css("pointerEvents" , "none");
    $(".op4").css("pointerEvents" , "none");
})
$(".op3").on('click', (v) => {
    $(".op3").css( "background-color","red" );
    $(".op1").css("pointerEvents" , "none");
    $(".op2").css("pointerEvents" , "none");
    
    $(".op4").css("pointerEvents" , "none");
})
$(".op4").on('click', (v) => {
    $(".op4").css( "background-color","red" );
    $(".op1").css("pointerEvents" , "none");
    $(".op2").css("pointerEvents" , "none");
    $(".op3").css("pointerEvents" , "none");
    
})  
    
    // let score_board = document.getElementById("socre_no");
    // let no =ques_no.innerHTML= parseInt(ques_no.innerHTML);   
    // let b = no-1;
    // let id = a.id.split('');
    // let ch = id[2];

    // if( app.questions[b].ans == ch ){
    //     a.innerHTML = "Correct";
    //     a.className = "Correct";
    //     a.style.background="green";
    //     document.getElementById("socre_no").innerHTML = parseInt(document.getElementById("socre_no").innerHTML)+1;
    //     // document.getElementById("socre_no") = ;
    //     console.log(app.questions[index]);
    // }
    // else
    // {
    //     a.innerHTML = "Worng";
    //     a.style.background="red";
    //     console.log("FALSE");
    //     a.className = "Wrong";
         
    // }
    // for(i=0;i<ul.children.length;i++){
    //         ul.children[i].style.pointerEvents = "none";
    //     }







$(function(){
    // data in attributes
    // getAttributeData()
    getjsonkeys()
        // getLocalData()
 })
//  function getJSON(){
//     $.getJSON('js/ques.json',function(json){
//         questions = json;
//         // // console.log(Object)
//         // let keys = localStorage.setItem("arraykeys" , Object.keys(questions))

//         let getkeys_db =localStorage.getItem("arraykeys").split(",");
//         // console.log(keys.length);
        
//         let randIndex = Math.floor(Math.random()*(getkeys_db.length))
//         // console.log(questions[res]);
//         console.log(localStorage.setItem(randIndex, JSON.stringify(questions[getkeys_db[randIndex]])))
//         let a = getkeys_db[randIndex].map()
//         // var storedNames = JSON.parse(localStorage.getItem("q1"));
//         let b = getkeys_db.splice(randIndex, 1)
//         console.log(localStorage.setItem("arraykeys", getkeys_db))
//         console.log(a)
        
        
//     })
//  }

 function getjsonkeys(){
    $.getJSON('js/ques.json',function(json){
        questions = json;
        // console.log(Object)
        Object.keys(questions)     
    })
 }