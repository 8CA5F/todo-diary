import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import { IoMdCheckboxOutline, IoMdCheckbox } from 'react-icons/io';
import classNames from 'classnames';
import moment from 'moment';

import {
    deleteTodo,
    updateTodoIsCompeleted,
} from '../store/actions/TodoActions';

const TodoList = () => {
    const todos = useSelector((state) => state.todoReducer.todos);
    const dispatch = useDispatch();

    const removeTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const updateIsCompleted = (id) => {
        dispatch(updateTodoIsCompeleted(id));
    };

    return (
        <div className="h-full flex flex-col items-center">
            <h2 className="h-10 w-full text-xl text-gray-400 text-center my-5 font-semibold border-b">
                Your To-Do(s)
            </h2>
            <div className="w-full h-full overflow-y-auto no-scrollbar">
                {!todos.length ? (
                    <div className="w-full h-full flex justify-center items-center -translate-y-1/4">
                        <h2 className="text-3xl text-gray-500 font-semibold select-none">
                            There is no created To-Do!
                        </h2>
                    </div>
                ) : (
                    todos.map((todo) => (
                        <div
                            key={todo._id}
                            className={classNames('incomplete-todo', {
                                'completed-todo': todo.isCompleted,
                            })}
                        >
                            <button
                                className="h-16 w-10 flex items-center justify-center"
                                onClick={() => removeTodo(todo._id)}
                            >
                                <MdOutlineRemoveCircle
                                    size={24}
                                    className="text-red-600"
                                />
                            </button>
                            <div className="h-full w-full py-3 mx-6 flex-grow px-2">
                                <div className="text-lg font-medium mb-1">
                                    {todo.title}
                                </div>
                                <div className="">{todo.detail}</div>
                            </div>
                            <div>
                                <h2 className="absolute top-1 right-1 select-none text-slate-400">
                                    {moment(todo.createDate).fromNow()}
                                </h2>
                                <button
                                    className="h-16 w-10 flex items-center justify-center"
                                    onClick={() => updateIsCompleted(todo._id)}
                                >
                                    {!todo.isCompleted ? (
                                        <IoMdCheckboxOutline size={24} />
                                    ) : (
                                        <IoMdCheckbox
                                            size={24}
                                            className="text-green-400"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TodoList;
