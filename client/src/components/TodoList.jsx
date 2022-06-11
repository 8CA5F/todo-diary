import React from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import { IoMdCheckboxOutline, IoMdCheckbox } from 'react-icons/io';

const TodoList = () => {
    const todos = useSelector((state) => state.todoReducer.todos);

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl text-center mb-10 font-semibold">
                Your To-Do(s)
            </h2>
            <div className="w-full max-h-[48rem] min-h-[48rem] overflow-y-auto transition-all duration-500">
                {todos.map((todo) => (
                    <div
                        key={todo._id}
                        className="w-full h-28 border-2 drop-shadow-md mb-3 rounded-md flex justify-between items-center"
                    >
                        <div className="h-full w-10 flex items-center justify-center">
                            <MdOutlineRemoveCircle
                                size={24}
                                className="text-red-600"
                            />
                        </div>
                        <div className="h-full mt-4 flex-grow px-2">
                            <h2 className="text-lg font-medium mb-1">
                                {todo.title}
                            </h2>
                            <h2>{todo.detail}</h2>
                        </div>
                        <div className="h-full w-10 flex items-center justify-center">
                            <IoMdCheckboxOutline size={24} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
