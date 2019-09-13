$(function(){
    getData();
 }) 


 function getData(){
    $.getData('ques-db.json',function(json){
        questions = json;




        console.log(questions)
        localStorage.setItem("questions",JSON.stringify(questions))
        let varr=localStorage.getItem("questions");
        let obj=JSON.parse(varr)
        const keys=Object.keys(questions)
        console.log("type of key variablE")
        console.log(typeof keys)
        console.log("value of b")
        let getQuestionAndAnswer = questions[keys[3]]
        console.log(getQuestionAndAnswer)




        let getQuestion=getQuestionAndAnswer["question"]
        document.getElementsByClassName("quest")[0].innerHTML=getQuestion
        let getOption=getQuestionAndAnswer["options"];
        console.log(getOption)
        let option1=getOption[0];
        document.getElementsByClassName("option1")[0].innerHTML=option1;
        console.log(document.getElementsByClassName("option1")[0].innerHTML)
        let option2=getOption[1];
        document.getElementById("option2").innerHTML=option2
        console.log(option2)
        console.log(document.getElementById("option2").innerHTML)
        func(option1);
        let option3=getOption[2];
        document.getElementById("option3").innerHTML=option3
        let option4=getOption[3];
        document.getElementById("option4").innerHTML=option4
        // console.log("type of oneValue" + typeof oneValue)
        // console.log(oneValue);
        // let one=oneValue[1];
        // console.log(one)
        $("input[type='button']").click(function(){
        let radioValue = $("input[name='option']:checked").val();
        console.log(radioValue);
        })
       
    })
  }
  function func(option1){
    document.getElementsByClassName("option1")[0].innerHTML=option1;
        console.log(console.log(option1));
  }  

        // localStorage.setItem("questions",JSON.stringify(questions));
        // let string=localStorage.getItem("questions");
        let myObj=JSON.stringify(questions);
        let objects=JSON.parse(string);
  
        
    })
 }






 