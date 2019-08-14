var express = require('express');

var router = express.Router();

var TodoController = require('../controllers/TodoController');

router.get('/', TodoController.todo);

module.exports = router;
