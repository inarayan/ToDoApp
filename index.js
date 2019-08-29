var express = require('express');
var port = 8003;
var app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('views'))
//set the middle ware to parse the request
app.use(express.urlencoded());

app.use('/', require('./routers/home'));

app.listen(port, function(err){
    if(err){
        console.log('Error starting the Todo web server');
    }
    else{
        console.log(`App sucessfully started on port ${port}`);

    }
})