import React from 'react';
import { useDispatch } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';

import {
    fetchTodos,
    searchTodo,
    deleteCompletedTodos,
} from '../store/actions/TodoActions';

const TodoFilter = () => {
    const dispatch = useDispatch();

    const handleQuery = (query) => {
        query ? dispatch(searchTodo(query)) : dispatch(fetchTodos());
    };

    const removeCompletedTodos = () => {
        dispatch(deleteCompletedTodos());
    };

    return (
        <div className="flex flex-col items-center gap-5 mt-[30%]">
            <input
                className="w-72 h-10 rounded-2xl drop-shadow-lg border outline-none px-4 placeholder:italic placeholder:text-base placeholder:font-thin placeholder:normal-case bg-search-svg bg-no-repeat bg-right bg-contain"
                placeholder="Search in title or detail..."
                onChange={(e) => handleQuery(e.target.value)}
            />
            <div
                className="w-72 h-10 cursor-pointer group border-2 flex justify-between items-center bg-white px-4 rounded-2xl drop-shadow-lg"
                onClick={() => removeCompletedTodos()}
            >
                <h2 className="font-semibold text-red-500">
                    Delete Complete Todos
                </h2>
                <AiFillDelete
                    size={24}
                    className="fill-red-600 group-hover:scale-110 transition-all"
                />
            </div>
        </div>
    );
};

export default TodoFilter;
