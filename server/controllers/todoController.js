const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    try {
        const todos = Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.createTodo = async (req, res) => {
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTodo = await Todo.findByIdAndRemove(id);
        res.status(204).json(deletedTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.updateTodoIsCompeleted = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        todo.isCompleted = !todo.isCompleted;
        const updatedTodo = await todo.save();
        res.status(202).json(updatedTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.getTodosByQuery = async (req, res) => {
    const query = req.params.query;
    try {
        const todos = await Todo.find().or([
            { title: { $regex: query, $options: 'i' } },
            { detail: { $regex: query, $options: 'i' } },
        ]);
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
