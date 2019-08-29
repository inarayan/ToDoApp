const Task = require('../model/Task');
const mongoose = require('../config/mongoose');
var todoList = [];


module.exports.todo_details = function(req, res){
  
    
    Task.find({}, function(err,taskList){
        
        if(err){
            console.log('error fetching the details');
            return;
        }
        else{
            todoList=taskList;  
          
            
            return res.render('home',{
                title:"To Do Appas",
                todoList: taskList
                
            });
        }

    });

    
};

module.exports.todo_createTask = function(req, res){
 
    

    //insert the record in mongoDB
    var newTask = new Task({
        "description":req.body.description,
        "category":req.body.Category,
        "dueDate":req.body.todoDate
    });

    newTask.save( function(err){
        if(err){
            console.log('Could not save the object');
            return;
        }
        else{
            console.log(' A New Task has been created');
            res.redirect('/');
        }
    })

    
}


module.exports.todo_deleteTask = function(req, res){
    console.log('********inside delete task');

     console.log(" The request parameter " + req.params.id);
     Task.findByIdAndRemove({_id:req.params.id}, function(err){
        if(err) {
            console.log("Error deleting the object");
            return;
        }
        else{
            console.log('Sucessfully deleted the record');
            return res.redirect('/');
        }
         
     })

     
 };

