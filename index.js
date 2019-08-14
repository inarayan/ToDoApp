var express = require('express');
var port = 8003;
var app = express();

app.listen(port, function(err){
    if(err){
        console.log('Error starting the Todo web server');
    }
    else{
        console.log(`App sucessfully started on port ${port}`);
        
    }
})