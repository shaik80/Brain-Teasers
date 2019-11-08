const mongoose= require('mongoose');

let UserSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    date:{
        type: Date,
        default : Date.now
    },
    score:{
        type:String
    }
});

mongoose.model('User',UserSchema)