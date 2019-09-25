const mongoose= require('mongoose');

let UserSchema = new mongoose.Schema({
    user:{
        type:String
    },
    score:{
        type:String
    }
});

mongoose.model('User',UserSchema)