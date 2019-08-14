var express = require('express');
var port = 8003;
var app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', require('./routers/home'));

app.listen(port, function(err){
    if(err){
        console.log('Error starting the Todo web server');
    }
    else{
        console.log(`App sucessfully started on port ${port}`);

    }
})