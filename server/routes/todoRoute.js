const express = require('express');

const todoController = require('../controllers/todoController');

const router = express.Router();

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);
router.patch('/:id', todoController.updateTodoIsCompeleted);
router.get('/query/:query', todoController.getTodosByQuery);

module.exports = router;
