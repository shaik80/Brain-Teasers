require('./models/db')
const express = require('express');
const app = express();
const port = process.env.Port || 3000
const path = require('path')
const cors = require('cors')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const questioncontrollers = require('./controllers/questioncontrollers');
const usercontrollers = require('./controllers/usercontrollers');


app.use(express.static('public'))


app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(cors())
app.use(bodyparser.json());

app.set('views',path.join(__dirname, "/views/"))
app.engine('hbs', exphbs({ extname:'hbs',defaultLayout:"mainlayouts",layoutsDir: __dirname+'/views/layouts'}))
app.set('view engine','hbs')


app.listen(port,() => console.log('server started on port 3000.....'))

app.use('/',questioncontrollers)
app.use('/',usercontrollers)
