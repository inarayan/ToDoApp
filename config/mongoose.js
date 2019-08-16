var mongoose = require('mongoose');

var mongoUrl = 'mongodb://localhost/TaskList';

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('error',(err)=>{'Error Connecting to MongoDB'});
db.once('open', function(){
    console.log('sucessfully connected to DB');
})