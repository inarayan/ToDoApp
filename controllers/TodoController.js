const Task = require('../model/Task');
const mongoose = require('../config/mongoose');
var todoList = [];

module.exports.todo_details = function(req, res){
    console.log('inside query 1');
    
    Task.find({}, function(err,taskList){
        console.log('inside query');

        if(err){
            console.log('error fetching the details')
        }
        else{
            console.log('taskList');
            
            console.log(taskList);
            todoList=taskList;
        }
    });

    // var todoList = [{
    //     "description": 'A Sample Task',
    //     "category": 'work',
    //     "duedate":'09/28/2019'
    // }];
    console.log('todoList' , todoList);
    return res.render('home',{ 
        'title':'ToDoApp',
        'todoList': todoList
        
    });
};

module.exports.todo_createTask = function(req, res){
   console.log('********');
    console.log(req.body)

    //insert the record in mongoDB
    var newTask = new Task({
        "description":req.body.description,
        "category":req.body.Category,
        "dueDate":req.body.todoDate
    });

    newTask.save( function(err){
        if(err){
            console.log('Could not save the object');
        }
        else{
            console.log(' A New Task has been created');
        }
    })

    res.redirect('/');
}

