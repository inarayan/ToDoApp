var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const taskSchema = new Schema({
    description:String,
    category:String,
    dueDate:String
});

const Tasks = mongoose.model('TaskList',taskSchema);

module.exports=Tasks;