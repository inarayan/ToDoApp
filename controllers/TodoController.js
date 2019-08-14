module.exports.todo = function(req, res){
    return res.render('home',{ 
        'title':'ToDoApp'
    });
}