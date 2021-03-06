$(function(){
    // global define
    $(".ans").hide()
    let score = 0;
    totalSeconds = 0;
    let ques_no = $("#ques_no");
    let op1 =$("#op1");
    let op2 =$("#op2")
    let op3 =$("#op3");
    let op4 =$("#op4");
    let index = 1;
    ques_no.html(index);
    let stoptime = setInterval(startTimer, 1000);
    start(index);

    $(".score").html(localStorage.getItem("score"))


    // strat timer
        function startTimer() {
        ++totalSeconds;
        hour = Math.floor(totalSeconds /3600);
        minute = Math.floor((totalSeconds - hour*3600)/60);
        seconds = totalSeconds - (hour*3600 + minute*60);

        $("#min").html(minute);
        $("#sec").html(seconds);
        if($("#min").html() == 5 && $("#sec").html() == 0){
            clearInterval(stoptime);
            alert("time out");
            window.location.replace("./index.html");   
        }
    }

    // start getting questions
    function start(index){
        index -=1
        $("#user-name").html(localStorage.getItem("name"))
        $.getJSON('http://localhost:3000/questions',function(json){
            questions = json;
            Object.keys(questions).length;        
            $("#question").html(questions[index].Question);
            op1.html(questions[index].Opt1);
            op2.html(questions[index].Opt2);
            op3.html(questions[index].Opt3);
            op4.html(questions[index].Opt4);
            $(".ans").html(questions[index].Answer)
        })
    }
n

    // make event pointer none
    function event_pointer_none(){
        $(".op1,.op2,.op3,.op4").css("pointerEvents" , "none");
    }

    // make event pointer auto
    function event_pointer_auto(){
        $(".op1,.op2,.op3,.op4").css("pointerEvents" , "auto");
        $(".op1,.op2,.op3,.op4").css( "background-color","#aee7e8" );
        $("").css("pointerEvenound-color","#aee7e8" );
    }


    // onclick events
    $("#next").on('click', () => {    
        let a =parseInt(ques_no.html())+1
        ques_no.html(a)
        start(a);
        $(".ans").hide()
        event_pointer_auto()
        if(a == 11)
        {
            window.location.replace("/score");
            $("#score").html(score)
        }
    
    })


    $(".op1").on('click', () => {
        if( op1.html() != $(".ans").html()){
            $(".op1").css( "background-color","#ef5350" );
            $(".ans").show()
        }
        else{
        $(".op1").css( "background-color","#66BB6A" );
        score = score+10
        localStorage.setItem("score", score)
        $(".ans").show()     
    }
         event_pointer_none()
    })

    $(".op2").on('click', () => {
        $(".op2").css( "background-color","#ef5350" );
        if( op2.html() != $(".ans").html()){
            $(".op2").css( "background-color","#ef5350" );
            $(".ans").show()
        }
        else{
        $(".op2").css( "background-color","#66BB6A" );
        $(".ans").show()
        score = score+10
        localStorage.setItem("score", score)
    }
         event_pointer_none()
    })

    $(".op3").on('click', () => {
        $(".op3").css( "background-color","#ef5350" );
        if(    op3.html() != $(".ans").html()){
            $(".op3").css( "background-color","#ef5350" );
            $(".ans").show()
        }
        else{
        $(".op3").css( "background-color","#66BB6A" );
        $(".ans").show()     
        score = score+10
        localStorage.setItem("score", score)
    }
         event_pointer_none()

    })


    $(".op4").on('click', () => {
        $(".op4").css( "background-color","#ef5350" );
        if(op4.html() != $(".ans").html()){
            $(".op4").css( "background-color","#ef5350" );
            $(".ans").show()
        }
        else{
        $(".op4").css( "background-color","#66BB6A" );
        $(".ans").show()
        score = score+10
        localStorage.setItem("score", score)
        }
        event_pointer_none()
    })

    
    // $( "div span:first-child" )
    // .css( "text-decoration", "underline" )
    // .hover(function() {
    //   $( this ).addClass( "sogreen" );
    // }, function() {
    //   $( this ).removeClass( "sogreen" );
    // });

    $("#submit-name").on('click', () => {
        localStorage.setItem("name", $(".info-name").val())
        window.location.replace("./question.html");
    })


  

    $("#End_game").on('click', () => {
        localStorage.removeItem("score")
        localStorage.removeItem("name")
        localStorage.setItem("score", 0)
        window.location.replace("./");
    })

    $("#Play_again").on('click', () => {
        localStorage.removeItem("score")
        localStorage.setItem("score", 0)
        window.location.replace("./question");    
    })
})