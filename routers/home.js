var express = require('express');

var router = express.Router();

var TodoController = require('../controllers/TodoController');

router.get('/', TodoController.todo_details);
router.post('/add-task', TodoController.todo_createTask);

module.exports = router;
