$(".ans").hide()
let score = 0;
let time =$("#time").html()
totalSeconds = 0;
let socre = 0;
let question = $("#question");
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
   $("#user-name").html(localStorage.getItem("name"))
    $.getJSON('js/ques.json',function(json){
        questions = json;
    Object.keys(questions).length;        
    // console.log("q"+index)
    $("#question").html(questions["q"+index].question);
    op1.html(questions["q"+index].options[0]);
    op2.html(questions["q"+index].options[1]);
    op3.html(questions["q"+index].options[2]);
    op4.html(questions["q"+index].options[3]);
    $(".ans").html(questions["q"+index].answer)
})

}
function event_pointer_none(){
    $(".op1").css("pointerEvents" , "none");
    $(".op2").css("pointerEvents" , "none");
    $(".op3").css("pointerEvents" , "none");
    $(".op4").css("pointerEvents" , "none");
}
function event_pointer_auto(){
    $(".op1").css("pointerEvents" , "auto");
    $(".op1").css( "background-color","#aee7e8" );
    $(".op2").css("pointerEvents" , "auto");
    $(".op2").css( "background-color","#aee7e8" );
    $(".op3").css("pointerEvents" , "auto");
    $(".op3").css( "background-color","#aee7e8" );
    $(".op4").css("pointerEvents" , "auto");
    $(".op4").css( "background-color","#aee7e8" );
}
$("#next").on('click', () => {    
    let a =parseInt(ques_no.html())+1
    ques_no.html(a)
    start(a);
    $(".ans").hide()
    event_pointer_auto()
    if(a == 11)
    {
        window.location.replace("../index.html");
    }
    
})
$("#prev").on('click', () => {    
    
    let a =parseInt(ques_no.html())-1
    ques_no.html(a)
    start(a);
    event_pointer_auto()
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
$(".op1").on('click', () => {
    if($("#op1").html() != $(".ans").html()){
        $(".op1").css( "background-color","#ef5350" );
        $(".ans").show()
    }
    else{
    $(".op1").css( "background-color","#66BB6A" );
    score = score+10
    
    $(".ans").show()     
}
     event_pointer_none()
})
$(".op2").on('click', () => {
    
    $(".op2").css( "background-color","#ef5350" );
    if( $("#op2").html() != $(".ans").html()){
        $(".op2").css( "background-color","#ef5350" );
        $(".ans").show()
    }
    else{
    $(".op2").css( "background-color","#66BB6A" );
    $(".ans").show()
    score = score+10
}
     event_pointer_none()
})
$(".op3").on('click', () => {
    $(".op3").css( "background-color","#ef5350" );
    if(    $("#op3").html() != $(".ans").html()){
        $(".op3").css( "background-color","#ef5350" );
        $(".ans").show()
    }
    else{
    $(".op3").css( "background-color","#66BB6A" );
    $(".ans").show()     
    score = score+10
}
     event_pointer_none()

})
$(".op4").on('click', () => {
    $(".op4").css( "background-color","#ef5350" );
    if($("#op4").html() != $(".ans").html()){
        $(".op4").css( "background-color","#ef5350" );
        $(".ans").show()
    }
    else{
    $(".op4").css( "background-color","#66BB6A" );
    $(".ans").show()
    score = score+10
     }
     event_pointer_none()
})

$("#submit-name").on('click', () => {
        console.log(localStorage.setItem("name", $(".info-name").val()))
        window.location.replace("../question.html");

})
