const mongoose= require('mongoose');

let QuestionSchema = new mongoose.Schema({
    Question:{
        type:String
    },
    Opt1:{
        type:String
    },
    Opt2:{
        type:String
    },
    Opt3:{
        type:String
    },
    Opt4:{
        type:String
    },
    Answer:{
      
        type:String,
    }
});

mongoose.model('Question',QuestionSchema)