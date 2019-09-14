
$(function(){
    // data in attributes
    // getAttributeData()
    getjsonkeys()
    $(".next").on('click', () => {
        getJSON()
      });
    // getLocalData()
 })
 function getJSON(){
    $.getJSON('js/ques.json',function(json){
        questions = json;
        // // console.log(Object)
        // let keys = localStorage.setItem("arraykeys" , Object.keys(questions))

        let getkeys_db =localStorage.getItem("arraykeys").split(",");
        // console.log(keys.length);
        
        let randIndex = Math.floor(Math.random()*(getkeys_db.length))
        // console.log(questions[res]);
        console.log(localStorage.setItem(randIndex, JSON.stringify(questions[getkeys_db[randIndex]])))
        let a = getkeys_db[randIndex].map()
        // var storedNames = JSON.parse(localStorage.getItem("q1"));
        let b = getkeys_db.splice(randIndex, 1)
        console.log(localStorage.setItem("arraykeys", getkeys_db))
        console.log(a)
        
        
    })
 }

 function getjsonkeys(){
    $.getJSON('js/ques.json',function(json){
        questions = json;
        // console.log(Object)
        localStorage.setItem("arraykeys" , Object.keys(questions))      
    })
 }