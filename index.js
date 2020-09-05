require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const routes = require('./router/index');




const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;//node 네이티브 promise사용
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_URI, {//DB연결
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static('public'));

app.use(function (req, res, next){
    console.log('Time : ', Date.now());
    next();
});

app.use("/", routes);


app.get('/register', async function(req, res){
    res.send("<h1>Hello World<h1>");
});



app.listen(port, () => {
    console.log('it is listening to port 4000');
    console.log(`open http://localhost:${port}`);
});


