const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const todoSchema = new Schema({
    title: {
        type: String,
        max: 30,
        required: true,
    },
    detail: {
        type: String,
        max: 235,
        required: false,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createDate: {
        type: Date,
        default: new Date(),
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
