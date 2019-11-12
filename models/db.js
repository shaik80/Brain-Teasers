const mongoose = require('mongoose');

//connect db 
mongoose.connect(
    'mongodb+srv://root:root@cluster0-mp92k.mongodb.net/Quiz?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true},  (err) => {
    if (!err) { console.log("db connection sucessed")}
    else { console.log("db connection error " + err)}
})

require('./Question.model')
require('./User.model')